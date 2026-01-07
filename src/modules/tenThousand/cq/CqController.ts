import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cq")
export default class CqController {
  @operation({
    summary: "Get Cq",
  })
  @get()
  static getCq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cq",
  })
  @post("{id}")
  static createCq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
