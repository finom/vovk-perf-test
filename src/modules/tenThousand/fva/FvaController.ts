import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fvas")
export default class FvaController {
  @operation({
    summary: "Get Fvas",
  })
  @get()
  static getFvas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fva",
  })
  @post("{id}")
  static createFva = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
