import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nli")
export default class NliController {
  @operation({
    summary: "Get Nli",
  })
  @get()
  static getNli = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nli",
  })
  @post("{id}")
  static createNli = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
