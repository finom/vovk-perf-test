import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nkes")
export default class NkeController {
  @operation({
    summary: "Get Nkes",
  })
  @get()
  static getNkes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nke",
  })
  @post("{id}")
  static createNke = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
