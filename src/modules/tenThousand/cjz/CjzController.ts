import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cjz")
export default class CjzController {
  @operation({
    summary: "Get Cjz",
  })
  @get()
  static getCjz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cjz",
  })
  @post("{id}")
  static createCjz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
