import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cjbs")
export default class CjbController {
  @operation({
    summary: "Get Cjbs",
  })
  @get()
  static getCjbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cjb",
  })
  @post("{id}")
  static createCjb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
