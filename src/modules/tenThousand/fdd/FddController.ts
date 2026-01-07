import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdd")
export default class FddController {
  @operation({
    summary: "Get Fdd",
  })
  @get()
  static getFdd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fdd",
  })
  @post("{id}")
  static createFdd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
