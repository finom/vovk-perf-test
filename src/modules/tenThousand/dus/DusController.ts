import { procedure, prefix, get, post, operation } from "vovk";

@prefix("duses")
export default class DusController {
  @operation({
    summary: "Get Duses",
  })
  @get()
  static getDuses = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dus",
  })
  @post("{id}")
  static createDus = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
