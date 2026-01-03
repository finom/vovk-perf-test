import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hets")
export default class HetController {
  @operation({
    summary: "Get Hets",
  })
  @get()
  static getHets = procedure({
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
