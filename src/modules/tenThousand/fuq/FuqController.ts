import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fuqs")
export default class FuqController {
  @operation({
    summary: "Get Fuqs",
  })
  @get()
  static getFuqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fuq",
  })
  @post("{id}")
  static createFuq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
