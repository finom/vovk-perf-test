import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lxr")
export default class LxrController {
  @operation({
    summary: "Get Lxr",
  })
  @get()
  static getLxr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lxr",
  })
  @post("{id}")
  static createLxr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
