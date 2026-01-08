import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nkz")
export default class NkzController {
  @operation({
    summary: "Get Nkz",
  })
  @get()
  static getNkz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nkz",
  })
  @post("{id}")
  static createNkz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
