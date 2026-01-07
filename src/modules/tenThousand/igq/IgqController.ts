import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igq")
export default class IgqController {
  @operation({
    summary: "Get Igq",
  })
  @get()
  static getIgq = procedure({
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
