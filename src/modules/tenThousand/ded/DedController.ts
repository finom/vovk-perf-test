import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ded")
export default class DedController {
  @operation({
    summary: "Get Ded",
  })
  @get()
  static getDed = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ded",
  })
  @post("{id}")
  static createDed = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
