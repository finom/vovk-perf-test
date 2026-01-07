import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxu")
export default class MxuController {
  @operation({
    summary: "Get Mxu",
  })
  @get()
  static getMxu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mxu",
  })
  @post("{id}")
  static createMxu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
