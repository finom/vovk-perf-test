import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jtqs")
export default class JtqController {
  @operation({
    summary: "Get Jtqs",
  })
  @get()
  static getJtqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jtq",
  })
  @post("{id}")
  static createJtq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
