import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khm")
export default class KhmController {
  @operation({
    summary: "Get Khm",
  })
  @get()
  static getKhm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Khm",
  })
  @post("{id}")
  static createKhm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
