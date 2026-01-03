import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nios")
export default class NioController {
  @operation({
    summary: "Get Nios",
  })
  @get()
  static getNios = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nio",
  })
  @post("{id}")
  static createNio = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
