import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aogs")
export default class AogController {
  @operation({
    summary: "Get Aogs",
  })
  @get()
  static getAogs = procedure({
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
