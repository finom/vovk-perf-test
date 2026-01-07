import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edc")
export default class EdcController {
  @operation({
    summary: "Get Edc",
  })
  @get()
  static getEdc = procedure({
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
