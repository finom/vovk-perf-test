import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ckk")
export default class CkkController {
  @operation({
    summary: "Get Ckk",
  })
  @get()
  static getCkk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ckk",
  })
  @post("{id}")
  static createCkk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
