import { procedure, prefix, get, post, operation } from "vovk";

@prefix("al")
export default class AlController {
  @operation({
    summary: "Get Al",
  })
  @get()
  static getAl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Al",
  })
  @post("{id}")
  static createAl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
