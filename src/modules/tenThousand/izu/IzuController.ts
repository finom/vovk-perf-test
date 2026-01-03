import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izus")
export default class IzuController {
  @operation({
    summary: "Get Izus",
  })
  @get()
  static getIzus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Izu",
  })
  @post("{id}")
  static createIzu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
