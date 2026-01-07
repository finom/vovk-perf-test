import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izb")
export default class IzbController {
  @operation({
    summary: "Get Izb",
  })
  @get()
  static getIzb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Izb",
  })
  @post("{id}")
  static createIzb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
