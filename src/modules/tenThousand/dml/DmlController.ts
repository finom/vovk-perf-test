import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmls")
export default class DmlController {
  @operation({
    summary: "Get Dmls",
  })
  @get()
  static getDmls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dml",
  })
  @post("{id}")
  static createDml = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
