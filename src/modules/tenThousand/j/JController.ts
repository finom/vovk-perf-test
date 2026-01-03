import { procedure, prefix, get, post, operation } from "vovk";

@prefix("js")
export default class JController {
  @operation({
    summary: "Get JS",
  })
  @get()
  static getJS = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create J",
  })
  @post("{id}")
  static createJ = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
