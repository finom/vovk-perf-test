import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axes")
export default class AxController {
  @operation({
    summary: "Get Axes",
  })
  @get()
  static getAxes = procedure({
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
