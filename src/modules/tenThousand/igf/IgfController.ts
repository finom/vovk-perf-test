import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igfs")
export default class IgfController {
  @operation({
    summary: "Get Igfs",
  })
  @get()
  static getIgfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Igf",
  })
  @post("{id}")
  static createIgf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
