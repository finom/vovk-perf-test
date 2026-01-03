import { procedure, prefix, get, post, operation } from "vovk";

@prefix("grqs")
export default class GrqController {
  @operation({
    summary: "Get Grqs",
  })
  @get()
  static getGrqs = procedure({
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
