import { procedure, prefix, get, post, operation } from "vovk";

@prefix("uqs")
export default class UqController {
  @operation({
    summary: "Get Uqs",
  })
  @get()
  static getUqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Uq",
  })
  @post("{id}")
  static createUq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
