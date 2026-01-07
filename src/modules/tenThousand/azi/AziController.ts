import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azi")
export default class AziController {
  @operation({
    summary: "Get Azi",
  })
  @get()
  static getAzi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Azi",
  })
  @post("{id}")
  static createAzi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
