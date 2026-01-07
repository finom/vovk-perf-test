import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpq")
export default class JpqController {
  @operation({
    summary: "Get Jpq",
  })
  @get()
  static getJpq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jpq",
  })
  @post("{id}")
  static createJpq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
