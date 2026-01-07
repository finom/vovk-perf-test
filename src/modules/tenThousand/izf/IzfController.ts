import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izf")
export default class IzfController {
  @operation({
    summary: "Get Izf",
  })
  @get()
  static getIzf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Izf",
  })
  @post("{id}")
  static createIzf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
