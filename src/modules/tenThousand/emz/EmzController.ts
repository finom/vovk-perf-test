import { procedure, prefix, get, post, operation } from "vovk";

@prefix("emzs")
export default class EmzController {
  @operation({
    summary: "Get Emzs",
  })
  @get()
  static getEmzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Emz",
  })
  @post("{id}")
  static createEmz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
