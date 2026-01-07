import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfo")
export default class CfoController {
  @operation({
    summary: "Get Cfo",
  })
  @get()
  static getCfo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cfo",
  })
  @post("{id}")
  static createCfo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
