import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lxh")
export default class LxhController {
  @operation({
    summary: "Get Lxh",
  })
  @get()
  static getLxh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lxh",
  })
  @post("{id}")
  static createLxh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
