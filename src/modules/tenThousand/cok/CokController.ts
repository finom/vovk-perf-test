import { procedure, prefix, get, post, operation } from "vovk";

@prefix("coks")
export default class CokController {
  @operation({
    summary: "Get Coks",
  })
  @get()
  static getCoks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cok",
  })
  @post("{id}")
  static createCok = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
