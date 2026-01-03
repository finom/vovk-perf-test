import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqds")
export default class HqdController {
  @operation({
    summary: "Get Hqds",
  })
  @get()
  static getHqds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hqd",
  })
  @post("{id}")
  static createHqd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
