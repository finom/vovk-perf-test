import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qies")
export default class QyController {
  @operation({
    summary: "Get Qies",
  })
  @get()
  static getQies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Qy",
  })
  @post("{id}")
  static createQy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
