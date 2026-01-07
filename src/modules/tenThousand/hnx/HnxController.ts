import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hnx")
export default class HnxController {
  @operation({
    summary: "Get Hnx",
  })
  @get()
  static getHnx = procedure({
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
