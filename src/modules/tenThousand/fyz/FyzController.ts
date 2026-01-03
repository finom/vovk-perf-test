import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fyzs")
export default class FyzController {
  @operation({
    summary: "Get Fyzs",
  })
  @get()
  static getFyzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fyz",
  })
  @post("{id}")
  static createFyz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
