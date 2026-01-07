import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqi")
export default class DqiController {
  @operation({
    summary: "Get Dqi",
  })
  @get()
  static getDqi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dqi",
  })
  @post("{id}")
  static createDqi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
