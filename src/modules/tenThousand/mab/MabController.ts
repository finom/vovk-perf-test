import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mabs")
export default class MabController {
  @operation({
    summary: "Get Mabs",
  })
  @get()
  static getMabs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mab",
  })
  @post("{id}")
  static createMab = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
