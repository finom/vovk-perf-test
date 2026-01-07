import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cjb")
export default class CjbController {
  @operation({
    summary: "Get Cjb",
  })
  @get()
  static getCjb = procedure({
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
