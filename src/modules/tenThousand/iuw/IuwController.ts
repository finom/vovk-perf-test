import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iuws")
export default class IuwController {
  @operation({
    summary: "Get Iuws",
  })
  @get()
  static getIuws = procedure({
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
