import { procedure, prefix, get, post, operation } from "vovk";

@prefix("esh")
export default class EshController {
  @operation({
    summary: "Get Esh",
  })
  @get()
  static getEsh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Esh",
  })
  @post("{id}")
  static createEsh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
