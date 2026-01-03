import { procedure, prefix, get, post, operation } from "vovk";

@prefix("alies")
export default class AlyController {
  @operation({
    summary: "Get Alies",
  })
  @get()
  static getAlies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aly",
  })
  @post("{id}")
  static createAly = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
