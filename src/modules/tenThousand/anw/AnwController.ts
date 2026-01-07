import { procedure, prefix, get, post, operation } from "vovk";

@prefix("anw")
export default class AnwController {
  @operation({
    summary: "Get Anw",
  })
  @get()
  static getAnw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Anw",
  })
  @post("{id}")
  static createAnw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
