import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpm")
export default class LpmController {
  @operation({
    summary: "Get Lpm",
  })
  @get()
  static getLpm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lpm",
  })
  @post("{id}")
  static createLpm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
