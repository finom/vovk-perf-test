import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lko")
export default class LkoController {
  @operation({
    summary: "Get Lko",
  })
  @get()
  static getLko = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lko",
  })
  @post("{id}")
  static createLko = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
