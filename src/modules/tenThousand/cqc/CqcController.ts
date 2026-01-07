import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqc")
export default class CqcController {
  @operation({
    summary: "Get Cqc",
  })
  @get()
  static getCqc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cqc",
  })
  @post("{id}")
  static createCqc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
