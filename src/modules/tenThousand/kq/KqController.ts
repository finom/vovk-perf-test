import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqs")
export default class KqController {
  @operation({
    summary: "Get Kqs",
  })
  @get()
  static getKqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kq",
  })
  @post("{id}")
  static createKq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
