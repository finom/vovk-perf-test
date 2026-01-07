import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jcu")
export default class JcuController {
  @operation({
    summary: "Get Jcu",
  })
  @get()
  static getJcu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jcu",
  })
  @post("{id}")
  static createJcu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
