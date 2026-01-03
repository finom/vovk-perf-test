import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efos")
export default class EfoController {
  @operation({
    summary: "Get Efos",
  })
  @get()
  static getEfos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Efo",
  })
  @post("{id}")
  static createEfo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
