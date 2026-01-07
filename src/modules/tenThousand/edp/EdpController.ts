import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edp")
export default class EdpController {
  @operation({
    summary: "Get Edp",
  })
  @get()
  static getEdp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Edp",
  })
  @post("{id}")
  static createEdp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
