import { procedure, prefix, get, post, operation } from "vovk";

@prefix("yas")
export default class YaController {
  @operation({
    summary: "Get Yas",
  })
  @get()
  static getYas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ya",
  })
  @post("{id}")
  static createYa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
