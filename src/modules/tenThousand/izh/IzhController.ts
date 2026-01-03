import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izhs")
export default class IzhController {
  @operation({
    summary: "Get Izhs",
  })
  @get()
  static getIzhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Izh",
  })
  @post("{id}")
  static createIzh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
