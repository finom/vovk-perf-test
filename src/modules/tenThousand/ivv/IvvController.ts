import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivv")
export default class IvvController {
  @operation({
    summary: "Get Ivv",
  })
  @get()
  static getIvv = procedure({
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
