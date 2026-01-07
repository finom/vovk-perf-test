import { procedure, prefix, get, post, operation } from "vovk";

@prefix("brh")
export default class BrhController {
  @operation({
    summary: "Get Brh",
  })
  @get()
  static getBrh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Brh",
  })
  @post("{id}")
  static createBrh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
