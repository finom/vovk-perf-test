import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fvi")
export default class FviController {
  @operation({
    summary: "Get Fvi",
  })
  @get()
  static getFvi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fvi",
  })
  @post("{id}")
  static createFvi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
