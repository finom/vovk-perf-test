import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nkb")
export default class NkbController {
  @operation({
    summary: "Get Nkb",
  })
  @get()
  static getNkb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nkb",
  })
  @post("{id}")
  static createNkb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
