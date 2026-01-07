import { procedure, prefix, get, post, operation } from "vovk";

@prefix("av")
export default class AvController {
  @operation({
    summary: "Get Av",
  })
  @get()
  static getAv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Av",
  })
  @post("{id}")
  static createAv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
