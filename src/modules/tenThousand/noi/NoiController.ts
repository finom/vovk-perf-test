import { procedure, prefix, get, post, operation } from "vovk";

@prefix("noi")
export default class NoiController {
  @operation({
    summary: "Get Noi",
  })
  @get()
  static getNoi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Noi",
  })
  @post("{id}")
  static createNoi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
