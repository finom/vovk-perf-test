import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fck")
export default class FckController {
  @operation({
    summary: "Get Fck",
  })
  @get()
  static getFck = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fck",
  })
  @post("{id}")
  static createFck = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
