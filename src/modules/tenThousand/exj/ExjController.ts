import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exjs")
export default class ExjController {
  @operation({
    summary: "Get Exjs",
  })
  @get()
  static getExjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Exj",
  })
  @post("{id}")
  static createExj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
