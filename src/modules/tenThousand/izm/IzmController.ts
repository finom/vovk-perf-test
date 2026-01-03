import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izms")
export default class IzmController {
  @operation({
    summary: "Get Izms",
  })
  @get()
  static getIzms = procedure({
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
