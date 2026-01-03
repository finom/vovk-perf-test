import { procedure, prefix, get, post, operation } from "vovk";

@prefix("feus")
export default class FeuController {
  @operation({
    summary: "Get Feus",
  })
  @get()
  static getFeus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Feu",
  })
  @post("{id}")
  static createFeu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
