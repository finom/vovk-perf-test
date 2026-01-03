import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khps")
export default class KhpController {
  @operation({
    summary: "Get Khps",
  })
  @get()
  static getKhps = procedure({
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
