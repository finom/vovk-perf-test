import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khbs")
export default class KhbController {
  @operation({
    summary: "Get Khbs",
  })
  @get()
  static getKhbs = procedure({
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
