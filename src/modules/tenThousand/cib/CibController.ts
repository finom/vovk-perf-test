import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cib")
export default class CibController {
  @operation({
    summary: "Get Cib",
  })
  @get()
  static getCib = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cib",
  })
  @post("{id}")
  static createCib = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
