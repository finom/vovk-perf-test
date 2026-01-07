import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqo")
export default class CqoController {
  @operation({
    summary: "Get Cqo",
  })
  @get()
  static getCqo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cqo",
  })
  @post("{id}")
  static createCqo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
