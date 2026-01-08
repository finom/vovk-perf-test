import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fqn")
export default class FqnController {
  @operation({
    summary: "Get Fqn",
  })
  @get()
  static getFqn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fqn",
  })
  @post("{id}")
  static createFqn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
