import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bai")
export default class BaiController {
  @operation({
    summary: "Get Bai",
  })
  @get()
  static getBai = procedure({
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
