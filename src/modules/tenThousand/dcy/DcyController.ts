import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dcy")
export default class DcyController {
  @operation({
    summary: "Get Dcy",
  })
  @get()
  static getDcy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dcy",
  })
  @post("{id}")
  static createDcy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
