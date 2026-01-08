import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hcr")
export default class HcrController {
  @operation({
    summary: "Get Hcr",
  })
  @get()
  static getHcr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hcr",
  })
  @post("{id}")
  static createHcr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
