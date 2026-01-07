import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxx")
export default class FxxController {
  @operation({
    summary: "Get Fxx",
  })
  @get()
  static getFxx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fxx",
  })
  @post("{id}")
  static createFxx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
