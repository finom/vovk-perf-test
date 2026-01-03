import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axos")
export default class AxoController {
  @operation({
    summary: "Get Axos",
  })
  @get()
  static getAxos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Axo",
  })
  @post("{id}")
  static createAxo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
