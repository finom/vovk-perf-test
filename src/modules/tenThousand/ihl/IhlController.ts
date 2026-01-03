import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihls")
export default class IhlController {
  @operation({
    summary: "Get Ihls",
  })
  @get()
  static getIhls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ihl",
  })
  @post("{id}")
  static createIhl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
