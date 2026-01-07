import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqq")
export default class IqqController {
  @operation({
    summary: "Get Iqq",
  })
  @get()
  static getIqq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iqq",
  })
  @post("{id}")
  static createIqq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
