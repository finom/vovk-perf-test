import { procedure, prefix, get, post, operation } from "vovk";

@prefix("geqs")
export default class GeqController {
  @operation({
    summary: "Get Geqs",
  })
  @get()
  static getGeqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Geq",
  })
  @post("{id}")
  static createGeq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
