import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxa")
export default class MxaController {
  @operation({
    summary: "Get Mxa",
  })
  @get()
  static getMxa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mxa",
  })
  @post("{id}")
  static createMxa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
