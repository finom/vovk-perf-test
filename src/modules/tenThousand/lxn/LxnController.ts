import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lxn")
export default class LxnController {
  @operation({
    summary: "Get Lxn",
  })
  @get()
  static getLxn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lxn",
  })
  @post("{id}")
  static createLxn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
