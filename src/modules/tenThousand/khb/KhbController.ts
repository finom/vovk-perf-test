import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khb")
export default class KhbController {
  @operation({
    summary: "Get Khb",
  })
  @get()
  static getKhb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Khb",
  })
  @post("{id}")
  static createKhb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
