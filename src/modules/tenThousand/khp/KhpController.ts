import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khp")
export default class KhpController {
  @operation({
    summary: "Get Khp",
  })
  @get()
  static getKhp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Khp",
  })
  @post("{id}")
  static createKhp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
