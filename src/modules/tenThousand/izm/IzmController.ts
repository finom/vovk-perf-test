import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izm")
export default class IzmController {
  @operation({
    summary: "Get Izm",
  })
  @get()
  static getIzm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Izm",
  })
  @post("{id}")
  static createIzm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
