import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jsj")
export default class JsjController {
  @operation({
    summary: "Get Jsj",
  })
  @get()
  static getJsj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jsj",
  })
  @post("{id}")
  static createJsj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
