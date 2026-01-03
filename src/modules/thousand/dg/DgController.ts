import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgs")
export default class DgController {
  @operation({
    summary: "Get Dgs",
  })
  @get()
  static getDgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dg",
  })
  @post("{id}")
  static createDg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
