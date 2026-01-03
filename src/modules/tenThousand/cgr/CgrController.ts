import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgrs")
export default class CgrController {
  @operation({
    summary: "Get Cgrs",
  })
  @get()
  static getCgrs = procedure({
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
