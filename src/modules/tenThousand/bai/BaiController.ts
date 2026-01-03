import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bais")
export default class BaiController {
  @operation({
    summary: "Get Bais",
  })
  @get()
  static getBais = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bai",
  })
  @post("{id}")
  static createBai = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
