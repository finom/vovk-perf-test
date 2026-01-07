import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jeq")
export default class JeqController {
  @operation({
    summary: "Get Jeq",
  })
  @get()
  static getJeq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jeq",
  })
  @post("{id}")
  static createJeq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
