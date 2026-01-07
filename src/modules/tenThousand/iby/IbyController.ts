import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iby")
export default class IbyController {
  @operation({
    summary: "Get Iby",
  })
  @get()
  static getIby = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iby",
  })
  @post("{id}")
  static createIby = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
