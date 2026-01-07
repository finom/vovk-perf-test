import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jtu")
export default class JtuController {
  @operation({
    summary: "Get Jtu",
  })
  @get()
  static getJtu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jtu",
  })
  @post("{id}")
  static createJtu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
