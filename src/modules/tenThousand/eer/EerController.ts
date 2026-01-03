import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eers")
export default class EerController {
  @operation({
    summary: "Get Eers",
  })
  @get()
  static getEers = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eer",
  })
  @post("{id}")
  static createEer = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
