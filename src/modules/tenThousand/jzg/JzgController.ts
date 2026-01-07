import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzg")
export default class JzgController {
  @operation({
    summary: "Get Jzg",
  })
  @get()
  static getJzg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jzg",
  })
  @post("{id}")
  static createJzg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
