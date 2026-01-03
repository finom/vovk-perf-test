import { procedure, prefix, get, post, operation } from "vovk";

@prefix("rqs")
export default class RqController {
  @operation({
    summary: "Get Rqs",
  })
  @get()
  static getRqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Rq",
  })
  @post("{id}")
  static createRq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
