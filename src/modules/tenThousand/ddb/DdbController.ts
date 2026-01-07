import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ddb")
export default class DdbController {
  @operation({
    summary: "Get Ddb",
  })
  @get()
  static getDdb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ddb",
  })
  @post("{id}")
  static createDdb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
