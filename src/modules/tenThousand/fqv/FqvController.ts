import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fqv")
export default class FqvController {
  @operation({
    summary: "Get Fqv",
  })
  @get()
  static getFqv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fqv",
  })
  @post("{id}")
  static createFqv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
