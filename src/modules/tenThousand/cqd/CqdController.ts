import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqds")
export default class CqdController {
  @operation({
    summary: "Get Cqds",
  })
  @get()
  static getCqds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cqd",
  })
  @post("{id}")
  static createCqd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
