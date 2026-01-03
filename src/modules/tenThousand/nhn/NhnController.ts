import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhns")
export default class NhnController {
  @operation({
    summary: "Get Nhns",
  })
  @get()
  static getNhns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nhn",
  })
  @post("{id}")
  static createNhn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
