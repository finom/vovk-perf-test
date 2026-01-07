import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyd")
export default class JydController {
  @operation({
    summary: "Get Jyd",
  })
  @get()
  static getJyd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jyd",
  })
  @post("{id}")
  static createJyd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
