import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jjg")
export default class JjgController {
  @operation({
    summary: "Get Jjg",
  })
  @get()
  static getJjg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jjg",
  })
  @post("{id}")
  static createJjg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
