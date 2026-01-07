import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izl")
export default class IzlController {
  @operation({
    summary: "Get Izl",
  })
  @get()
  static getIzl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Izl",
  })
  @post("{id}")
  static createIzl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
