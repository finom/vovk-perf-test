import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gods")
export default class GodController {
  @operation({
    summary: "Get Gods",
  })
  @get()
  static getGods = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create God",
  })
  @post("{id}")
  static createGod = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
