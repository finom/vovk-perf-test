import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khqs")
export default class KhqController {
  @operation({
    summary: "Get Khqs",
  })
  @get()
  static getKhqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Khq",
  })
  @post("{id}")
  static createKhq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
