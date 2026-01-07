import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jlq")
export default class JlqController {
  @operation({
    summary: "Get Jlq",
  })
  @get()
  static getJlq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jlq",
  })
  @post("{id}")
  static createJlq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
