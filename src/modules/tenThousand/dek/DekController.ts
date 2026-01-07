import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dek")
export default class DekController {
  @operation({
    summary: "Get Dek",
  })
  @get()
  static getDek = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dek",
  })
  @post("{id}")
  static createDek = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
