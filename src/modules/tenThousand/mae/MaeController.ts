import { procedure, prefix, get, post, operation } from "vovk";

@prefix("maes")
export default class MaeController {
  @operation({
    summary: "Get Maes",
  })
  @get()
  static getMaes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mae",
  })
  @post("{id}")
  static createMae = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
