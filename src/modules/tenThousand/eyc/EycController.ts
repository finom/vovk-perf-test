import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eycs")
export default class EycController {
  @operation({
    summary: "Get Eycs",
  })
  @get()
  static getEycs = procedure({
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
