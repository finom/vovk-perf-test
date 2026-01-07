import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbn")
export default class LbnController {
  @operation({
    summary: "Get Lbn",
  })
  @get()
  static getLbn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lbn",
  })
  @post("{id}")
  static createLbn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
