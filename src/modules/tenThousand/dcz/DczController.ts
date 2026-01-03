import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dczs")
export default class DczController {
  @operation({
    summary: "Get Dczs",
  })
  @get()
  static getDczs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dcz",
  })
  @post("{id}")
  static createDcz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
