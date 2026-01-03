import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igcs")
export default class IgcController {
  @operation({
    summary: "Get Igcs",
  })
  @get()
  static getIgcs = procedure({
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
