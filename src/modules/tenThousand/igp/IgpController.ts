import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igp")
export default class IgpController {
  @operation({
    summary: "Get Igp",
  })
  @get()
  static getIgp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Igp",
  })
  @post("{id}")
  static createIgp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
