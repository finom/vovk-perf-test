import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwc")
export default class LwcController {
  @operation({
    summary: "Get Lwc",
  })
  @get()
  static getLwc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lwc",
  })
  @post("{id}")
  static createLwc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
