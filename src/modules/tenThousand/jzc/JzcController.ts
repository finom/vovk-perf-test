import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzcs")
export default class JzcController {
  @operation({
    summary: "Get Jzcs",
  })
  @get()
  static getJzcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jzc",
  })
  @post("{id}")
  static createJzc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
