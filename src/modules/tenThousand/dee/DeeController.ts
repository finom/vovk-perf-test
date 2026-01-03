import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dees")
export default class DeeController {
  @operation({
    summary: "Get Dees",
  })
  @get()
  static getDees = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dee",
  })
  @post("{id}")
  static createDee = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
