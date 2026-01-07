import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kd")
export default class KdController {
  @operation({
    summary: "Get Kd",
  })
  @get()
  static getKd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kd",
  })
  @post("{id}")
  static createKd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
