import { procedure, prefix, get, post, operation } from "vovk";

@prefix("leb")
export default class LebController {
  @operation({
    summary: "Get Leb",
  })
  @get()
  static getLeb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Leb",
  })
  @post("{id}")
  static createLeb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
