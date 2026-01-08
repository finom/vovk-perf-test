import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nkm")
export default class NkmController {
  @operation({
    summary: "Get Nkm",
  })
  @get()
  static getNkm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nkm",
  })
  @post("{id}")
  static createNkm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
