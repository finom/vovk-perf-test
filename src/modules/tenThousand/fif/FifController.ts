import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fif")
export default class FifController {
  @operation({
    summary: "Get Fif",
  })
  @get()
  static getFif = procedure({
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
