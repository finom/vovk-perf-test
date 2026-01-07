import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iux")
export default class IuxController {
  @operation({
    summary: "Get Iux",
  })
  @get()
  static getIux = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iux",
  })
  @post("{id}")
  static createIux = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
