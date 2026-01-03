import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khes")
export default class KheController {
  @operation({
    summary: "Get Khes",
  })
  @get()
  static getKhes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Khe",
  })
  @post("{id}")
  static createKhe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
