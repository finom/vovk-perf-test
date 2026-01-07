import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jco")
export default class JcoController {
  @operation({
    summary: "Get Jco",
  })
  @get()
  static getJco = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jco",
  })
  @post("{id}")
  static createJco = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
