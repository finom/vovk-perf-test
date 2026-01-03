import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwqs")
export default class KwqController {
  @operation({
    summary: "Get Kwqs",
  })
  @get()
  static getKwqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kwq",
  })
  @post("{id}")
  static createKwq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
