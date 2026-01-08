import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dfa")
export default class DfaController {
  @operation({
    summary: "Get Dfa",
  })
  @get()
  static getDfa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dfa",
  })
  @post("{id}")
  static createDfa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
