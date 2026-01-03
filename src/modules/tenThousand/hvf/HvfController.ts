import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvfs")
export default class HvfController {
  @operation({
    summary: "Get Hvfs",
  })
  @get()
  static getHvfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hvf",
  })
  @post("{id}")
  static createHvf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
