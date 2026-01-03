import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mgxes")
export default class MgxController {
  @operation({
    summary: "Get Mgxes",
  })
  @get()
  static getMgxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mgx",
  })
  @post("{id}")
  static createMgx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
