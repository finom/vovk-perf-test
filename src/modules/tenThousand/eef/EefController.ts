import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eef")
export default class EefController {
  @operation({
    summary: "Get Eef",
  })
  @get()
  static getEef = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eef",
  })
  @post("{id}")
  static createEef = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
