import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lug")
export default class LugController {
  @operation({
    summary: "Get Lug",
  })
  @get()
  static getLug = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lug",
  })
  @post("{id}")
  static createLug = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
