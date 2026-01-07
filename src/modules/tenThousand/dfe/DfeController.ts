import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfe")
export default class DfeController {
  @operation({
    summary: "Get Dfe",
  })
  @get()
  static getDfe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dfe",
  })
  @post("{id}")
  static createDfe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
