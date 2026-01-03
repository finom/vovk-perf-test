import { procedure, prefix, get, post, operation } from "vovk";

@prefix("miys")
export default class MiyController {
  @operation({
    summary: "Get Miys",
  })
  @get()
  static getMiys = procedure({
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
