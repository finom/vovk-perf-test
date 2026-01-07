import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kyu")
export default class KyuController {
  @operation({
    summary: "Get Kyu",
  })
  @get()
  static getKyu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kyu",
  })
  @post("{id}")
  static createKyu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
