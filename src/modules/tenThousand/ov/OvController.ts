import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ov")
export default class OvController {
  @operation({
    summary: "Get Ov",
  })
  @get()
  static getOv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ov",
  })
  @post("{id}")
  static createOv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
