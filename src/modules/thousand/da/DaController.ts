import { procedure, prefix, get, post, operation } from "vovk";

@prefix("das")
export default class DaController {
  @operation({
    summary: "Get Das",
  })
  @get()
  static getDas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Da",
  })
  @post("{id}")
  static createDa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
