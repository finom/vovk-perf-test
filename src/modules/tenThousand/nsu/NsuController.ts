import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsu")
export default class NsuController {
  @operation({
    summary: "Get Nsu",
  })
  @get()
  static getNsu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nsu",
  })
  @post("{id}")
  static createNsu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
