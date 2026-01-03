import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbfs")
export default class HbfController {
  @operation({
    summary: "Get Hbfs",
  })
  @get()
  static getHbfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hbf",
  })
  @post("{id}")
  static createHbf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
