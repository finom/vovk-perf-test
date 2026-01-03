import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwrs")
export default class MwrController {
  @operation({
    summary: "Get Mwrs",
  })
  @get()
  static getMwrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mwr",
  })
  @post("{id}")
  static createMwr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
