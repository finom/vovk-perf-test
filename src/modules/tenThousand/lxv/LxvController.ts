import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lxv")
export default class LxvController {
  @operation({
    summary: "Get Lxv",
  })
  @get()
  static getLxv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lxv",
  })
  @post("{id}")
  static createLxv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
