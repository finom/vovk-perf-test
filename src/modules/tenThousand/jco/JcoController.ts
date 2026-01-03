import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jcos")
export default class JcoController {
  @operation({
    summary: "Get Jcos",
  })
  @get()
  static getJcos = procedure({
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
