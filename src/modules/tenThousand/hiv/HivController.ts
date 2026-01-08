import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hiv")
export default class HivController {
  @operation({
    summary: "Get Hiv",
  })
  @get()
  static getHiv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hiv",
  })
  @post("{id}")
  static createHiv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
