import { procedure, prefix, get, post, operation } from "vovk";

@prefix("deks")
export default class DekController {
  @operation({
    summary: "Get Deks",
  })
  @get()
  static getDeks = procedure({
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
