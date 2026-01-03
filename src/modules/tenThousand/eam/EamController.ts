import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eams")
export default class EamController {
  @operation({
    summary: "Get Eams",
  })
  @get()
  static getEams = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eam",
  })
  @post("{id}")
  static createEam = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
