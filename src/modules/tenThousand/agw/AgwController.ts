import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agw")
export default class AgwController {
  @operation({
    summary: "Get Agw",
  })
  @get()
  static getAgw = procedure({
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
