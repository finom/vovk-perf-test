import { procedure, prefix, get, post, operation } from "vovk";

@prefix("clc")
export default class ClcController {
  @operation({
    summary: "Get Clc",
  })
  @get()
  static getClc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Clc",
  })
  @post("{id}")
  static createClc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
