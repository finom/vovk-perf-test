import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzqs")
export default class JzqController {
  @operation({
    summary: "Get Jzqs",
  })
  @get()
  static getJzqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jzq",
  })
  @post("{id}")
  static createJzq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
