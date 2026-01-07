import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpb")
export default class JpbController {
  @operation({
    summary: "Get Jpb",
  })
  @get()
  static getJpb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jpb",
  })
  @post("{id}")
  static createJpb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
