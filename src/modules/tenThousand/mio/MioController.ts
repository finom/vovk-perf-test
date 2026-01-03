import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mios")
export default class MioController {
  @operation({
    summary: "Get Mios",
  })
  @get()
  static getMios = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mio",
  })
  @post("{id}")
  static createMio = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
