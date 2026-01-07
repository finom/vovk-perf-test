import { procedure, prefix, get, post, operation } from "vovk";

@prefix("grq")
export default class GrqController {
  @operation({
    summary: "Get Grq",
  })
  @get()
  static getGrq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Grq",
  })
  @post("{id}")
  static createGrq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
