import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqfs")
export default class HqfController {
  @operation({
    summary: "Get Hqfs",
  })
  @get()
  static getHqfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hqf",
  })
  @post("{id}")
  static createHqf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
