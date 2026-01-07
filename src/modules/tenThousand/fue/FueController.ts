import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fue")
export default class FueController {
  @operation({
    summary: "Get Fue",
  })
  @get()
  static getFue = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fue",
  })
  @post("{id}")
  static createFue = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
