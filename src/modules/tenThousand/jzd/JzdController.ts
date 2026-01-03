import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzds")
export default class JzdController {
  @operation({
    summary: "Get Jzds",
  })
  @get()
  static getJzds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jzd",
  })
  @post("{id}")
  static createJzd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
