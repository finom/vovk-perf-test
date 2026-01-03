import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eozs")
export default class EozController {
  @operation({
    summary: "Get Eozs",
  })
  @get()
  static getEozs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eoz",
  })
  @post("{id}")
  static createEoz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
