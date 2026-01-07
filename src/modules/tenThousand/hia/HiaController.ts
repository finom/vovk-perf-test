import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hia")
export default class HiaController {
  @operation({
    summary: "Get Hia",
  })
  @get()
  static getHia = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hia",
  })
  @post("{id}")
  static createHia = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
