import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mgn")
export default class MgnController {
  @operation({
    summary: "Get Mgn",
  })
  @get()
  static getMgn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mgn",
  })
  @post("{id}")
  static createMgn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
