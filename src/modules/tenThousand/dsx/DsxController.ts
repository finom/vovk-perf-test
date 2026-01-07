import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dsx")
export default class DsxController {
  @operation({
    summary: "Get Dsx",
  })
  @get()
  static getDsx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dsx",
  })
  @post("{id}")
  static createDsx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
