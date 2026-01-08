import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hcz")
export default class HczController {
  @operation({
    summary: "Get Hcz",
  })
  @get()
  static getHcz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hcz",
  })
  @post("{id}")
  static createHcz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
