import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aog")
export default class AogController {
  @operation({
    summary: "Get Aog",
  })
  @get()
  static getAog = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aog",
  })
  @post("{id}")
  static createAog = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
