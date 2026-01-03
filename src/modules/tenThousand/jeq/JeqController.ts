import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jeqs")
export default class JeqController {
  @operation({
    summary: "Get Jeqs",
  })
  @get()
  static getJeqs = procedure({
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
