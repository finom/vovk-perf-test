import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lne")
export default class LneController {
  @operation({
    summary: "Get Lne",
  })
  @get()
  static getLne = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lne",
  })
  @post("{id}")
  static createLne = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
