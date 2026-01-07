import { procedure, prefix, get, post, operation } from "vovk";

@prefix("for")
export default class ForController {
  @operation({
    summary: "Get For",
  })
  @get()
  static getFor = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create For",
  })
  @post("{id}")
  static createFor = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
