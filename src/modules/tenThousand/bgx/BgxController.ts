import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgxes")
export default class BgxController {
  @operation({
    summary: "Get Bgxes",
  })
  @get()
  static getBgxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bgx",
  })
  @post("{id}")
  static createBgx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
