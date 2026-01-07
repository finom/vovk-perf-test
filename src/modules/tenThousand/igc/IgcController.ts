import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igc")
export default class IgcController {
  @operation({
    summary: "Get Igc",
  })
  @get()
  static getIgc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Igc",
  })
  @post("{id}")
  static createIgc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
