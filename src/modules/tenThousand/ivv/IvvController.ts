import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivvs")
export default class IvvController {
  @operation({
    summary: "Get Ivvs",
  })
  @get()
  static getIvvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ivv",
  })
  @post("{id}")
  static createIvv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
