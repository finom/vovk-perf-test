import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edcs")
export default class EdcController {
  @operation({
    summary: "Get Edcs",
  })
  @get()
  static getEdcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Edc",
  })
  @post("{id}")
  static createEdc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
