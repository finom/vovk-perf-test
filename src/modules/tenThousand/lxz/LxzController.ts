import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lxz")
export default class LxzController {
  @operation({
    summary: "Get Lxz",
  })
  @get()
  static getLxz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lxz",
  })
  @post("{id}")
  static createLxz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
