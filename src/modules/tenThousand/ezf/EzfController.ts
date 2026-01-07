import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezf")
export default class EzfController {
  @operation({
    summary: "Get Ezf",
  })
  @get()
  static getEzf = procedure({
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
