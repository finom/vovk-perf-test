import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lxc")
export default class LxcController {
  @operation({
    summary: "Get Lxc",
  })
  @get()
  static getLxc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lxc",
  })
  @post("{id}")
  static createLxc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
