import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hxm")
export default class HxmController {
  @operation({
    summary: "Get Hxm",
  })
  @get()
  static getHxm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hxm",
  })
  @post("{id}")
  static createHxm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
