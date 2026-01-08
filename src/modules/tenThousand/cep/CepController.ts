import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cep")
export default class CepController {
  @operation({
    summary: "Get Cep",
  })
  @get()
  static getCep = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cep",
  })
  @post("{id}")
  static createCep = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
