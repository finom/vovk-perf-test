import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lxu")
export default class LxuController {
  @operation({
    summary: "Get Lxu",
  })
  @get()
  static getLxu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lxu",
  })
  @post("{id}")
  static createLxu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
