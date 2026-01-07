import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xi")
export default class XiController {
  @operation({
    summary: "Get Xi",
  })
  @get()
  static getXi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Xi",
  })
  @post("{id}")
  static createXi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
