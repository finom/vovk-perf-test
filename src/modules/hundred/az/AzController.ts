import { procedure, prefix, get, post, operation } from "vovk";

@prefix("az")
export default class AzController {
  @operation({
    summary: "Get Az",
  })
  @get()
  static getAz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Az",
  })
  @post("{id}")
  static createAz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
