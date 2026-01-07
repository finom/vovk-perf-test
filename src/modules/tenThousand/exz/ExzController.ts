import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exz")
export default class ExzController {
  @operation({
    summary: "Get Exz",
  })
  @get()
  static getExz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Exz",
  })
  @post("{id}")
  static createExz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
