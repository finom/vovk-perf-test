import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpa")
export default class LpaController {
  @operation({
    summary: "Get Lpa",
  })
  @get()
  static getLpa = procedure({
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
