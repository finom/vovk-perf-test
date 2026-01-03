import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igqs")
export default class IgqController {
  @operation({
    summary: "Get Igqs",
  })
  @get()
  static getIgqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Igq",
  })
  @post("{id}")
  static createIgq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
