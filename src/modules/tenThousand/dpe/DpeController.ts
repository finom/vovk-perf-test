import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dpe")
export default class DpeController {
  @operation({
    summary: "Get Dpe",
  })
  @get()
  static getDpe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dpe",
  })
  @post("{id}")
  static createDpe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
