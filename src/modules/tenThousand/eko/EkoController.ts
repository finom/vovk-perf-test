import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ekos")
export default class EkoController {
  @operation({
    summary: "Get Ekos",
  })
  @get()
  static getEkos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eko",
  })
  @post("{id}")
  static createEko = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
