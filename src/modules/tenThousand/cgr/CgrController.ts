import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgr")
export default class CgrController {
  @operation({
    summary: "Get Cgr",
  })
  @get()
  static getCgr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cgr",
  })
  @post("{id}")
  static createCgr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
