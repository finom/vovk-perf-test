import { procedure, prefix, get, post, operation } from "vovk";

@prefix("meos")
export default class MeoController {
  @operation({
    summary: "Get Meos",
  })
  @get()
  static getMeos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Meo",
  })
  @post("{id}")
  static createMeo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
