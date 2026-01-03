import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezfs")
export default class EzfController {
  @operation({
    summary: "Get Ezfs",
  })
  @get()
  static getEzfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ezf",
  })
  @post("{id}")
  static createEzf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
