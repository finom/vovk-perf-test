import { procedure, prefix, get, post, operation } from "vovk";

@prefix("het")
export default class HetController {
  @operation({
    summary: "Get Het",
  })
  @get()
  static getHet = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Het",
  })
  @post("{id}")
  static createHet = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
