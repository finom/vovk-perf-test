import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivws")
export default class IvwController {
  @operation({
    summary: "Get Ivws",
  })
  @get()
  static getIvws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ivw",
  })
  @post("{id}")
  static createIvw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
