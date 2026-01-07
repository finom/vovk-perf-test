import { procedure, prefix, get, post, operation } from "vovk";

@prefix("drl")
export default class DrlController {
  @operation({
    summary: "Get Drl",
  })
  @get()
  static getDrl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Drl",
  })
  @post("{id}")
  static createDrl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
