import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqn")
export default class CqnController {
  @operation({
    summary: "Get Cqn",
  })
  @get()
  static getCqn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cqn",
  })
  @post("{id}")
  static createCqn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
