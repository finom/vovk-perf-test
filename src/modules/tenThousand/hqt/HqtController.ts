import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqt")
export default class HqtController {
  @operation({
    summary: "Get Hqt",
  })
  @get()
  static getHqt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hqt",
  })
  @post("{id}")
  static createHqt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
