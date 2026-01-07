import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khi")
export default class KhiController {
  @operation({
    summary: "Get Khi",
  })
  @get()
  static getKhi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Khi",
  })
  @post("{id}")
  static createKhi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
