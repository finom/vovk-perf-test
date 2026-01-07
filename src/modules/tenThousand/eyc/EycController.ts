import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eyc")
export default class EycController {
  @operation({
    summary: "Get Eyc",
  })
  @get()
  static getEyc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eyc",
  })
  @post("{id}")
  static createEyc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
