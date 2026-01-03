import { procedure, prefix, get, post, operation } from "vovk";

@prefix("diys")
export default class DiyController {
  @operation({
    summary: "Get Diys",
  })
  @get()
  static getDiys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Diy",
  })
  @post("{id}")
  static createDiy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
