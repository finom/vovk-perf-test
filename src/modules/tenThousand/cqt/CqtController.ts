import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqt")
export default class CqtController {
  @operation({
    summary: "Get Cqt",
  })
  @get()
  static getCqt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cqt",
  })
  @post("{id}")
  static createCqt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
