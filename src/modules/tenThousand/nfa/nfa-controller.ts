import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nfa")
export default class NfaController {
  @operation({
    summary: "Get Nfa",
  })
  @get()
  static getNfa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nfa",
  })
  @post("{id}")
  static createNfa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
