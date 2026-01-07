import { procedure, prefix, get, post, operation } from "vovk";

@prefix("oj")
export default class OjController {
  @operation({
    summary: "Get Oj",
  })
  @get()
  static getOj = procedure({
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
