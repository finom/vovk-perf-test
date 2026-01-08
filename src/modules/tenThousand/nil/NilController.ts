import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nil")
export default class NilController {
  @operation({
    summary: "Get Nil",
  })
  @get()
  static getNil = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nil",
  })
  @post("{id}")
  static createNil = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
