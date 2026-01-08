import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lxd")
export default class LxdController {
  @operation({
    summary: "Get Lxd",
  })
  @get()
  static getLxd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lxd",
  })
  @post("{id}")
  static createLxd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
