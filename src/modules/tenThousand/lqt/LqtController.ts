import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqt")
export default class LqtController {
  @operation({
    summary: "Get Lqt",
  })
  @get()
  static getLqt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lqt",
  })
  @post("{id}")
  static createLqt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
