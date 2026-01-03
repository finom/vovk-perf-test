import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hrhs")
export default class HrhController {
  @operation({
    summary: "Get Hrhs",
  })
  @get()
  static getHrhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hrh",
  })
  @post("{id}")
  static createHrh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
