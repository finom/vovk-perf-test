import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpas")
export default class LpaController {
  @operation({
    summary: "Get Lpas",
  })
  @get()
  static getLpas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lpa",
  })
  @post("{id}")
  static createLpa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
