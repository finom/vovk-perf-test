import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bou")
export default class BouController {
  @operation({
    summary: "Get Bou",
  })
  @get()
  static getBou = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bou",
  })
  @post("{id}")
  static createBou = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
