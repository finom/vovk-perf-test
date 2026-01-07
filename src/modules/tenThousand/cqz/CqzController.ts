import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqz")
export default class CqzController {
  @operation({
    summary: "Get Cqz",
  })
  @get()
  static getCqz = procedure({
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
