import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dpt")
export default class DptController {
  @operation({
    summary: "Get Dpt",
  })
  @get()
  static getDpt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dpt",
  })
  @post("{id}")
  static createDpt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
