import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ed")
export default class EdController {
  @operation({
    summary: "Get Ed",
  })
  @get()
  static getEd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ed",
  })
  @post("{id}")
  static createEd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
