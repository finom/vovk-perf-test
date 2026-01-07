import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izj")
export default class IzjController {
  @operation({
    summary: "Get Izj",
  })
  @get()
  static getIzj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Izj",
  })
  @post("{id}")
  static createIzj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
