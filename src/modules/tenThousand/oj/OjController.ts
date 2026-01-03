import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ojs")
export default class OjController {
  @operation({
    summary: "Get Ojs",
  })
  @get()
  static getOjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Oj",
  })
  @post("{id}")
  static createOj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
