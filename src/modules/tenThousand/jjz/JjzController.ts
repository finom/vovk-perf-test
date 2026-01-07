import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jjz")
export default class JjzController {
  @operation({
    summary: "Get Jjz",
  })
  @get()
  static getJjz = procedure({
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
