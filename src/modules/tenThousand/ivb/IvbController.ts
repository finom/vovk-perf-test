import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivb")
export default class IvbController {
  @operation({
    summary: "Get Ivb",
  })
  @get()
  static getIvb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ivb",
  })
  @post("{id}")
  static createIvb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
