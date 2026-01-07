import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvf")
export default class BvfController {
  @operation({
    summary: "Get Bvf",
  })
  @get()
  static getBvf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bvf",
  })
  @post("{id}")
  static createBvf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
