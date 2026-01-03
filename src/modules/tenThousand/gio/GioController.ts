import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gios")
export default class GioController {
  @operation({
    summary: "Get Gios",
  })
  @get()
  static getGios = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gio",
  })
  @post("{id}")
  static createGio = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
