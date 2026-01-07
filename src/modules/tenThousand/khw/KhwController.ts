import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khw")
export default class KhwController {
  @operation({
    summary: "Get Khw",
  })
  @get()
  static getKhw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Khw",
  })
  @post("{id}")
  static createKhw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
