import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gdks")
export default class GdkController {
  @operation({
    summary: "Get Gdks",
  })
  @get()
  static getGdks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gdk",
  })
  @post("{id}")
  static createGdk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
