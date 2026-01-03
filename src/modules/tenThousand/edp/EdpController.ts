import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edps")
export default class EdpController {
  @operation({
    summary: "Get Edps",
  })
  @get()
  static getEdps = procedure({
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
