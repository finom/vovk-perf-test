import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fiq")
export default class FiqController {
  @operation({
    summary: "Get Fiq",
  })
  @get()
  static getFiq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fiq",
  })
  @post("{id}")
  static createFiq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
