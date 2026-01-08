import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lxm")
export default class LxmController {
  @operation({
    summary: "Get Lxm",
  })
  @get()
  static getLxm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lxm",
  })
  @post("{id}")
  static createLxm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
