import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bfa")
export default class BfaController {
  @operation({
    summary: "Get Bfa",
  })
  @get()
  static getBfa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bfa",
  })
  @post("{id}")
  static createBfa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
