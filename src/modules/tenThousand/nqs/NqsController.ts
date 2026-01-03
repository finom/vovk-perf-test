import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqs")
export default class NqsController {
  @operation({
    summary: "Get Nqs",
  })
  @get()
  static getNqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nqs",
  })
  @post("{id}")
  static createNqs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
