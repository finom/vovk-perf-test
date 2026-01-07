import { procedure, prefix, get, post, operation } from "vovk";

@prefix("diy")
export default class DiyController {
  @operation({
    summary: "Get Diy",
  })
  @get()
  static getDiy = procedure({
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
