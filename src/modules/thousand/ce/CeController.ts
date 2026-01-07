import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ce")
export default class CeController {
  @operation({
    summary: "Get Ce",
  })
  @get()
  static getCe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ce",
  })
  @post("{id}")
  static createCe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
