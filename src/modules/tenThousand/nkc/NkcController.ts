import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nkc")
export default class NkcController {
  @operation({
    summary: "Get Nkc",
  })
  @get()
  static getNkc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nkc",
  })
  @post("{id}")
  static createNkc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
