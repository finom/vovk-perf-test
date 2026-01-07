import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ax")
export default class AxController {
  @operation({
    summary: "Get Ax",
  })
  @get()
  static getAx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ax",
  })
  @post("{id}")
  static createAx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
