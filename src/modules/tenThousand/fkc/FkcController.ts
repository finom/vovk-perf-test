import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fkcs")
export default class FkcController {
  @operation({
    summary: "Get Fkcs",
  })
  @get()
  static getFkcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fkc",
  })
  @post("{id}")
  static createFkc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
