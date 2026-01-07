import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzj")
export default class JzjController {
  @operation({
    summary: "Get Jzj",
  })
  @get()
  static getJzj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jzj",
  })
  @post("{id}")
  static createJzj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
