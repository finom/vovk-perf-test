import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqfs")
export default class CqfController {
  @operation({
    summary: "Get Cqfs",
  })
  @get()
  static getCqfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cqf",
  })
  @post("{id}")
  static createCqf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
