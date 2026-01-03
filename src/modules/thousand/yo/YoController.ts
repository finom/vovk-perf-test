import { procedure, prefix, get, post, operation } from "vovk";

@prefix("yos")
export default class YoController {
  @operation({
    summary: "Get Yos",
  })
  @get()
  static getYos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Yo",
  })
  @post("{id}")
  static createYo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
