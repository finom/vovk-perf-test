import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhs")
export default class FhController {
  @operation({
    summary: "Get Fhs",
  })
  @get()
  static getFhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fh",
  })
  @post("{id}")
  static createFh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
