import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivf")
export default class IvfController {
  @operation({
    summary: "Get Ivf",
  })
  @get()
  static getIvf = procedure({
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
