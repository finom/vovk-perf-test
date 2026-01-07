import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aec")
export default class AecController {
  @operation({
    summary: "Get Aec",
  })
  @get()
  static getAec = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aec",
  })
  @post("{id}")
  static createAec = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
