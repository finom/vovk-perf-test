import { procedure, prefix, get, post, operation } from "vovk";

@prefix("amis")
export default class AmiController {
  @operation({
    summary: "Get Amis",
  })
  @get()
  static getAmis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ami",
  })
  @post("{id}")
  static createAmi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
