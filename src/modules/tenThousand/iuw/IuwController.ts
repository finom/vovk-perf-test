import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iuw")
export default class IuwController {
  @operation({
    summary: "Get Iuw",
  })
  @get()
  static getIuw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iuw",
  })
  @post("{id}")
  static createIuw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
