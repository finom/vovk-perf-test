import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dkcs")
export default class DkcController {
  @operation({
    summary: "Get Dkcs",
  })
  @get()
  static getDkcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dkc",
  })
  @post("{id}")
  static createDkc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
