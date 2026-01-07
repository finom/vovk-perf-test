import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epb")
export default class EpbController {
  @operation({
    summary: "Get Epb",
  })
  @get()
  static getEpb = procedure({
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
