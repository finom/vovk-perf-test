import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ceo")
export default class CeoController {
  @operation({
    summary: "Get Ceo",
  })
  @get()
  static getCeo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ceo",
  })
  @post("{id}")
  static createCeo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
