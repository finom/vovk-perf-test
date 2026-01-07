import { procedure, prefix, get, post, operation } from "vovk";

@prefix("liw")
export default class LiwController {
  @operation({
    summary: "Get Liw",
  })
  @get()
  static getLiw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Liw",
  })
  @post("{id}")
  static createLiw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
