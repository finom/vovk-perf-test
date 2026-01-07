import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jcj")
export default class JcjController {
  @operation({
    summary: "Get Jcj",
  })
  @get()
  static getJcj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jcj",
  })
  @post("{id}")
  static createJcj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
