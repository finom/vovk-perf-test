import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fqm")
export default class FqmController {
  @operation({
    summary: "Get Fqm",
  })
  @get()
  static getFqm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fqm",
  })
  @post("{id}")
  static createFqm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
