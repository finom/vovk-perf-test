import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivfs")
export default class IvfController {
  @operation({
    summary: "Get Ivfs",
  })
  @get()
  static getIvfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ivf",
  })
  @post("{id}")
  static createIvf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
