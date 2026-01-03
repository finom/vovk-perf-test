import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epbs")
export default class EpbController {
  @operation({
    summary: "Get Epbs",
  })
  @get()
  static getEpbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Epb",
  })
  @post("{id}")
  static createEpb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
