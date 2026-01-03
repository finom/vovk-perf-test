import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exrs")
export default class ExrController {
  @operation({
    summary: "Get Exrs",
  })
  @get()
  static getExrs = procedure({
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
