import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmies")
export default class FmyController {
  @operation({
    summary: "Get Fmies",
  })
  @get()
  static getFmies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fmy",
  })
  @post("{id}")
  static createFmy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
