import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iut")
export default class IutController {
  @operation({
    summary: "Get Iut",
  })
  @get()
  static getIut = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iut",
  })
  @post("{id}")
  static createIut = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
