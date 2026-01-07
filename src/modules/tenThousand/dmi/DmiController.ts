import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmi")
export default class DmiController {
  @operation({
    summary: "Get Dmi",
  })
  @get()
  static getDmi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dmi",
  })
  @post("{id}")
  static createDmi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
