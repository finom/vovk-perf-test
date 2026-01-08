import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fqq")
export default class FqqController {
  @operation({
    summary: "Get Fqq",
  })
  @get()
  static getFqq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fqq",
  })
  @post("{id}")
  static createFqq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
