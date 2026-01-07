import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iid")
export default class IidController {
  @operation({
    summary: "Get Iid",
  })
  @get()
  static getIid = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iid",
  })
  @post("{id}")
  static createIid = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
