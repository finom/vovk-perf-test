import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jiks")
export default class JikController {
  @operation({
    summary: "Get Jiks",
  })
  @get()
  static getJiks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jik",
  })
  @post("{id}")
  static createJik = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
