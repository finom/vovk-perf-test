import { procedure, prefix, get, post, operation } from "vovk";

@prefix("myc")
export default class MycController {
  @operation({
    summary: "Get Myc",
  })
  @get()
  static getMyc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Myc",
  })
  @post("{id}")
  static createMyc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
