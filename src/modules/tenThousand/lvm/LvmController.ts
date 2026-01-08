import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lvm")
export default class LvmController {
  @operation({
    summary: "Get Lvm",
  })
  @get()
  static getLvm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lvm",
  })
  @post("{id}")
  static createLvm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
