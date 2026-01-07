import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qy")
export default class QyController {
  @operation({
    summary: "Get Qy",
  })
  @get()
  static getQy = procedure({
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
