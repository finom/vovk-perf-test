import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igps")
export default class IgpController {
  @operation({
    summary: "Get Igps",
  })
  @get()
  static getIgps = procedure({
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
