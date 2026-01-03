import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mis")
export default class MisController {
  @operation({
    summary: "Get Mis",
  })
  @get()
  static getMis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mis",
  })
  @post("{id}")
  static createMis = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
