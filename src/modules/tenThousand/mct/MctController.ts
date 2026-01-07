import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mct")
export default class MctController {
  @operation({
    summary: "Get Mct",
  })
  @get()
  static getMct = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mct",
  })
  @post("{id}")
  static createMct = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
