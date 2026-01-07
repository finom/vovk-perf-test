import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evi")
export default class EviController {
  @operation({
    summary: "Get Evi",
  })
  @get()
  static getEvi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Evi",
  })
  @post("{id}")
  static createEvi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
