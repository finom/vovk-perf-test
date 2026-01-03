import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpxes")
export default class JpxController {
  @operation({
    summary: "Get Jpxes",
  })
  @get()
  static getJpxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jpx",
  })
  @post("{id}")
  static createJpx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
