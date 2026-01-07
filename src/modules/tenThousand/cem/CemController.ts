import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cem")
export default class CemController {
  @operation({
    summary: "Get Cem",
  })
  @get()
  static getCem = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cem",
  })
  @post("{id}")
  static createCem = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
