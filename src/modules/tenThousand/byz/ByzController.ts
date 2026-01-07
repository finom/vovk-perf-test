import { procedure, prefix, get, post, operation } from "vovk";

@prefix("byz")
export default class ByzController {
  @operation({
    summary: "Get Byz",
  })
  @get()
  static getByz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Byz",
  })
  @post("{id}")
  static createByz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
