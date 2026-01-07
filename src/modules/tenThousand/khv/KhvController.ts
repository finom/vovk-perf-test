import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khv")
export default class KhvController {
  @operation({
    summary: "Get Khv",
  })
  @get()
  static getKhv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Khv",
  })
  @post("{id}")
  static createKhv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
