import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iries")
export default class IryController {
  @operation({
    summary: "Get Iries",
  })
  @get()
  static getIries = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iry",
  })
  @post("{id}")
  static createIry = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
