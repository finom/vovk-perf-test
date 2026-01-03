import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqzs")
export default class CqzController {
  @operation({
    summary: "Get Cqzs",
  })
  @get()
  static getCqzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cqz",
  })
  @post("{id}")
  static createCqz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
