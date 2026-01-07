import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fsu")
export default class FsuController {
  @operation({
    summary: "Get Fsu",
  })
  @get()
  static getFsu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fsu",
  })
  @post("{id}")
  static createFsu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
