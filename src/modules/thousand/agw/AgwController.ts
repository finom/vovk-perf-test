import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agws")
export default class AgwController {
  @operation({
    summary: "Get Agws",
  })
  @get()
  static getAgws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Agw",
  })
  @post("{id}")
  static createAgw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
