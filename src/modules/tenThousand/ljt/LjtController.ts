import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ljt")
export default class LjtController {
  @operation({
    summary: "Get Ljt",
  })
  @get()
  static getLjt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ljt",
  })
  @post("{id}")
  static createLjt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
