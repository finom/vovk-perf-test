import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jva")
export default class JvaController {
  @operation({
    summary: "Get Jva",
  })
  @get()
  static getJva = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jva",
  })
  @post("{id}")
  static createJva = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
