import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fqb")
export default class FqbController {
  @operation({
    summary: "Get Fqb",
  })
  @get()
  static getFqb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fqb",
  })
  @post("{id}")
  static createFqb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
