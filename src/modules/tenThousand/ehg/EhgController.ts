import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehg")
export default class EhgController {
  @operation({
    summary: "Get Ehg",
  })
  @get()
  static getEhg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ehg",
  })
  @post("{id}")
  static createEhg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
