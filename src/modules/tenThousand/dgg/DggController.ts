import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgg")
export default class DggController {
  @operation({
    summary: "Get Dgg",
  })
  @get()
  static getDgg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dgg",
  })
  @post("{id}")
  static createDgg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
