import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nl")
export default class NlController {
  @operation({
    summary: "Get Nl",
  })
  @get()
  static getNl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nl",
  })
  @post("{id}")
  static createNl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
