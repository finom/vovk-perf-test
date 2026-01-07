import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxn")
export default class LxnController {
  @operation({
    summary: "Get Lxn",
  })
  @get()
  static getLxn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lxn",
  })
  @post("{id}")
  static createLxn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
