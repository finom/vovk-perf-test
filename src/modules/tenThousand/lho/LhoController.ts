import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhos")
export default class LhoController {
  @operation({
    summary: "Get Lhos",
  })
  @get()
  static getLhos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lho",
  })
  @post("{id}")
  static createLho = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
