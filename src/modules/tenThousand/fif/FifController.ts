import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fifs")
export default class FifController {
  @operation({
    summary: "Get Fifs",
  })
  @get()
  static getFifs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fif",
  })
  @post("{id}")
  static createFif = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
