import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fngs")
export default class FngController {
  @operation({
    summary: "Get Fngs",
  })
  @get()
  static getFngs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fng",
  })
  @post("{id}")
  static createFng = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
