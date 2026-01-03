import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izws")
export default class IzwController {
  @operation({
    summary: "Get Izws",
  })
  @get()
  static getIzws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Izw",
  })
  @post("{id}")
  static createIzw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
