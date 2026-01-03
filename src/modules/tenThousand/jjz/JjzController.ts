import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jjzs")
export default class JjzController {
  @operation({
    summary: "Get Jjzs",
  })
  @get()
  static getJjzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jjz",
  })
  @post("{id}")
  static createJjz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
