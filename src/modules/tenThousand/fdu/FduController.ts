import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdu")
export default class FduController {
  @operation({
    summary: "Get Fdu",
  })
  @get()
  static getFdu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fdu",
  })
  @post("{id}")
  static createFdu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
