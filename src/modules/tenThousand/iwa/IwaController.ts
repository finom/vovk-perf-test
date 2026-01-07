import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwa")
export default class IwaController {
  @operation({
    summary: "Get Iwa",
  })
  @get()
  static getIwa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iwa",
  })
  @post("{id}")
  static createIwa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
