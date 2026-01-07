import { procedure, prefix, get, post, operation } from "vovk";

@prefix("th")
export default class ThController {
  @operation({
    summary: "Get Th",
  })
  @get()
  static getTh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Th",
  })
  @post("{id}")
  static createTh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
