import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exr")
export default class ExrController {
  @operation({
    summary: "Get Exr",
  })
  @get()
  static getExr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Exr",
  })
  @post("{id}")
  static createExr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
