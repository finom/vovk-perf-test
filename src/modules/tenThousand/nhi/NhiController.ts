import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhis")
export default class NhiController {
  @operation({
    summary: "Get Nhis",
  })
  @get()
  static getNhis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nhi",
  })
  @post("{id}")
  static createNhi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
