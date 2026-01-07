import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mex")
export default class MexController {
  @operation({
    summary: "Get Mex",
  })
  @get()
  static getMex = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mex",
  })
  @post("{id}")
  static createMex = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
