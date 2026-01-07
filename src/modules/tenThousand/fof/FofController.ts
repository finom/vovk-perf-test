import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fof")
export default class FofController {
  @operation({
    summary: "Get Fof",
  })
  @get()
  static getFof = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fof",
  })
  @post("{id}")
  static createFof = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
