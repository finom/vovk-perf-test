import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fkus")
export default class FkuController {
  @operation({
    summary: "Get Fkus",
  })
  @get()
  static getFkus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fku",
  })
  @post("{id}")
  static createFku = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
