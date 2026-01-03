import { procedure, prefix, get, post, operation } from "vovk";

@prefix("decs")
export default class DecController {
  @operation({
    summary: "Get Decs",
  })
  @get()
  static getDecs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dec",
  })
  @post("{id}")
  static createDec = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
