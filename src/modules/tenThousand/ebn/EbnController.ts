import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebns")
export default class EbnController {
  @operation({
    summary: "Get Ebns",
  })
  @get()
  static getEbns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ebn",
  })
  @post("{id}")
  static createEbn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
