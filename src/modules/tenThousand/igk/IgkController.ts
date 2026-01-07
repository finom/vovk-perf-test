import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igk")
export default class IgkController {
  @operation({
    summary: "Get Igk",
  })
  @get()
  static getIgk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Igk",
  })
  @post("{id}")
  static createIgk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
