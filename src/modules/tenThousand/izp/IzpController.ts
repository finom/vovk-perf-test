import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izps")
export default class IzpController {
  @operation({
    summary: "Get Izps",
  })
  @get()
  static getIzps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Izp",
  })
  @post("{id}")
  static createIzp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
