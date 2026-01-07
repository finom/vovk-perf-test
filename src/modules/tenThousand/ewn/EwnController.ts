import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ewn")
export default class EwnController {
  @operation({
    summary: "Get Ewn",
  })
  @get()
  static getEwn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ewn",
  })
  @post("{id}")
  static createEwn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
