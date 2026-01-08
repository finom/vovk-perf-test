import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nta")
export default class NtaController {
  @operation({
    summary: "Get Nta",
  })
  @get()
  static getNta = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nta",
  })
  @post("{id}")
  static createNta = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
