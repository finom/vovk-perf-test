import { procedure, prefix, get, post, operation } from "vovk";

@prefix("emt")
export default class EmtController {
  @operation({
    summary: "Get Emt",
  })
  @get()
  static getEmt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Emt",
  })
  @post("{id}")
  static createEmt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
