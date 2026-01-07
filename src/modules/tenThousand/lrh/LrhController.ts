import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lrh")
export default class LrhController {
  @operation({
    summary: "Get Lrh",
  })
  @get()
  static getLrh = procedure({
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
