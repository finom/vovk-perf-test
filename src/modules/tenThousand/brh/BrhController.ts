import { procedure, prefix, get, post, operation } from "vovk";

@prefix("brhs")
export default class BrhController {
  @operation({
    summary: "Get Brhs",
  })
  @get()
  static getBrhs = procedure({
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
