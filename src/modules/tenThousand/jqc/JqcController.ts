import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqcs")
export default class JqcController {
  @operation({
    summary: "Get Jqcs",
  })
  @get()
  static getJqcs = procedure({
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
