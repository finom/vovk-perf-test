import { procedure, prefix, get, post, operation } from "vovk";

@prefix("je")
export default class JeController {
  @operation({
    summary: "Get Je",
  })
  @get()
  static getJe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Je",
  })
  @post("{id}")
  static createJe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
