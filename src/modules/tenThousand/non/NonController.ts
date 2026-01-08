import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("non")
export default class NonController {
  @operation({
    summary: "Get Non",
  })
  @get()
  static getNon = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Non",
  })
  @post("{id}")
  static createNon = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
