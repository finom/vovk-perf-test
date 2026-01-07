import { procedure, prefix, get, post, operation } from "vovk";

@prefix("m")
export default class MController {
  @operation({
    summary: "Get M",
  })
  @get()
  static getM = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create M",
  })
  @post("{id}")
  static createM = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
