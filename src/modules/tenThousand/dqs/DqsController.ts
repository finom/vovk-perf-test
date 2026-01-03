import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqs")
export default class DqsController {
  @operation({
    summary: "Get Dqs",
  })
  @get()
  static getDqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dqs",
  })
  @post("{id}")
  static createDqs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
