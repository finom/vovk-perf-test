import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izjs")
export default class IzjController {
  @operation({
    summary: "Get Izjs",
  })
  @get()
  static getIzjs = procedure({
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
