import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mny")
export default class MnyController {
  @operation({
    summary: "Get Mny",
  })
  @get()
  static getMny = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mny",
  })
  @post("{id}")
  static createMny = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
