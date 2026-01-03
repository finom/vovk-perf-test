import { procedure, prefix, get, post, operation } from "vovk";

@prefix("byzs")
export default class ByzController {
  @operation({
    summary: "Get Byzs",
  })
  @get()
  static getByzs = procedure({
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
