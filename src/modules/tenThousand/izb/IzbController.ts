import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izbs")
export default class IzbController {
  @operation({
    summary: "Get Izbs",
  })
  @get()
  static getIzbs = procedure({
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
