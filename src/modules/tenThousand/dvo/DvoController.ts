import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvos")
export default class DvoController {
  @operation({
    summary: "Get Dvos",
  })
  @get()
  static getDvos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dvo",
  })
  @post("{id}")
  static createDvo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
