import { procedure, prefix, get, post, operation } from "vovk";

@prefix("pe")
export default class PeController {
  @operation({
    summary: "Get Pe",
  })
  @get()
  static getPe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Pe",
  })
  @post("{id}")
  static createPe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
