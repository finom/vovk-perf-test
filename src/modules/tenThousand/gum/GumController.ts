import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gums")
export default class GumController {
  @operation({
    summary: "Get Gums",
  })
  @get()
  static getGums = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gum",
  })
  @post("{id}")
  static createGum = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
