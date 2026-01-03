import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvos")
export default class MvoController {
  @operation({
    summary: "Get Mvos",
  })
  @get()
  static getMvos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mvo",
  })
  @post("{id}")
  static createMvo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
