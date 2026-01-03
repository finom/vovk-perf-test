import { procedure, prefix, get, post, operation } from "vovk";

@prefix("goes")
export default class GoeController {
  @operation({
    summary: "Get Goes",
  })
  @get()
  static getGoes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Goe",
  })
  @post("{id}")
  static createGoe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
