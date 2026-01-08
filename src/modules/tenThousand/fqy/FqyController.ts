import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fqy")
export default class FqyController {
  @operation({
    summary: "Get Fqy",
  })
  @get()
  static getFqy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fqy",
  })
  @post("{id}")
  static createFqy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
