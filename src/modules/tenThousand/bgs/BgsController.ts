import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgs")
export default class BgsController {
  @operation({
    summary: "Get Bgs",
  })
  @get()
  static getBgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bgs",
  })
  @post("{id}")
  static createBgs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
