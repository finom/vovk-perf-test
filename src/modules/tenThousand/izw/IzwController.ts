import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izw")
export default class IzwController {
  @operation({
    summary: "Get Izw",
  })
  @get()
  static getIzw = procedure({
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
