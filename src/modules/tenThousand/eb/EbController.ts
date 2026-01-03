import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebs")
export default class EbController {
  @operation({
    summary: "Get Ebs",
  })
  @get()
  static getEbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eb",
  })
  @post("{id}")
  static createEb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
