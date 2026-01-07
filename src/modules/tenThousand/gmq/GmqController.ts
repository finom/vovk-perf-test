import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gmq")
export default class GmqController {
  @operation({
    summary: "Get Gmq",
  })
  @get()
  static getGmq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gmq",
  })
  @post("{id}")
  static createGmq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
