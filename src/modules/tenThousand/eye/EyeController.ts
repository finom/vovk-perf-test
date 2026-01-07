import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eye")
export default class EyeController {
  @operation({
    summary: "Get Eye",
  })
  @get()
  static getEye = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eye",
  })
  @post("{id}")
  static createEye = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
