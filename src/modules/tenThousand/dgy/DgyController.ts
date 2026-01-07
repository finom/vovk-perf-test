import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgy")
export default class DgyController {
  @operation({
    summary: "Get Dgy",
  })
  @get()
  static getDgy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dgy",
  })
  @post("{id}")
  static createDgy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
