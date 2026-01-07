import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jcy")
export default class JcyController {
  @operation({
    summary: "Get Jcy",
  })
  @get()
  static getJcy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jcy",
  })
  @post("{id}")
  static createJcy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
