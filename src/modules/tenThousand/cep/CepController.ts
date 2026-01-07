import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cep")
export default class CepController {
  @operation({
    summary: "Get Cep",
  })
  @get()
  static getCep = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cep",
  })
  @post("{id}")
  static createCep = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
