import { procedure, prefix, get, post, operation } from "vovk";

@prefix("miy")
export default class MiyController {
  @operation({
    summary: "Get Miy",
  })
  @get()
  static getMiy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Miy",
  })
  @post("{id}")
  static createMiy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
