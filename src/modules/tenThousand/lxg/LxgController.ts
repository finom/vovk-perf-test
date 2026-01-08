import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lxg")
export default class LxgController {
  @operation({
    summary: "Get Lxg",
  })
  @get()
  static getLxg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lxg",
  })
  @post("{id}")
  static createLxg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
