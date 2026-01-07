import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gpw")
export default class GpwController {
  @operation({
    summary: "Get Gpw",
  })
  @get()
  static getGpw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gpw",
  })
  @post("{id}")
  static createGpw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
