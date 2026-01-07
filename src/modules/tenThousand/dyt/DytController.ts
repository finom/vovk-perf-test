import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dyt")
export default class DytController {
  @operation({
    summary: "Get Dyt",
  })
  @get()
  static getDyt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dyt",
  })
  @post("{id}")
  static createDyt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
