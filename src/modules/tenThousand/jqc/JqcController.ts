import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqc")
export default class JqcController {
  @operation({
    summary: "Get Jqc",
  })
  @get()
  static getJqc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jqc",
  })
  @post("{id}")
  static createJqc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
