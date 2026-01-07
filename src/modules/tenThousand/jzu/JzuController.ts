import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzu")
export default class JzuController {
  @operation({
    summary: "Get Jzu",
  })
  @get()
  static getJzu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jzu",
  })
  @post("{id}")
  static createJzu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
