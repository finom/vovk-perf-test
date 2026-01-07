import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdz")
export default class FdzController {
  @operation({
    summary: "Get Fdz",
  })
  @get()
  static getFdz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fdz",
  })
  @post("{id}")
  static createFdz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
