import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxc")
export default class MxcController {
  @operation({
    summary: "Get Mxc",
  })
  @get()
  static getMxc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mxc",
  })
  @post("{id}")
  static createMxc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
