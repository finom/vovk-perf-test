import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lrhs")
export default class LrhController {
  @operation({
    summary: "Get Lrhs",
  })
  @get()
  static getLrhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lrh",
  })
  @post("{id}")
  static createLrh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
