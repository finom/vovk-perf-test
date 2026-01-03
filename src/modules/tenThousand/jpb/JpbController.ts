import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpbs")
export default class JpbController {
  @operation({
    summary: "Get Jpbs",
  })
  @get()
  static getJpbs = procedure({
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
