import { procedure, prefix, get, post, operation } from "vovk";

@prefix("los")
export default class LosController {
  @operation({
    summary: "Get Los",
  })
  @get()
  static getLos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Los",
  })
  @post("{id}")
  static createLos = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
