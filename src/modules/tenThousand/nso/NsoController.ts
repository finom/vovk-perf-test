import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nso")
export default class NsoController {
  @operation({
    summary: "Get Nso",
  })
  @get()
  static getNso = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nso",
  })
  @post("{id}")
  static createNso = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
