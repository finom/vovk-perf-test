import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izrs")
export default class IzrController {
  @operation({
    summary: "Get Izrs",
  })
  @get()
  static getIzrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Izr",
  })
  @post("{id}")
  static createIzr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
