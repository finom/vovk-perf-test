import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwj")
export default class LwjController {
  @operation({
    summary: "Get Lwj",
  })
  @get()
  static getLwj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lwj",
  })
  @post("{id}")
  static createLwj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
