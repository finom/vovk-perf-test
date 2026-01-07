import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aai")
export default class AaiController {
  @operation({
    summary: "Get Aai",
  })
  @get()
  static getAai = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aai",
  })
  @post("{id}")
  static createAai = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
