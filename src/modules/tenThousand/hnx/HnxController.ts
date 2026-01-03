import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hnxes")
export default class HnxController {
  @operation({
    summary: "Get Hnxes",
  })
  @get()
  static getHnxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hnx",
  })
  @post("{id}")
  static createHnx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
