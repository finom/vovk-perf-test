import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jlbs")
export default class JlbController {
  @operation({
    summary: "Get Jlbs",
  })
  @get()
  static getJlbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jlb",
  })
  @post("{id}")
  static createJlb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
