import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iry")
export default class IryController {
  @operation({
    summary: "Get Iry",
  })
  @get()
  static getIry = procedure({
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
