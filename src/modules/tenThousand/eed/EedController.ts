import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eeds")
export default class EedController {
  @operation({
    summary: "Get Eeds",
  })
  @get()
  static getEeds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eed",
  })
  @post("{id}")
  static createEed = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
