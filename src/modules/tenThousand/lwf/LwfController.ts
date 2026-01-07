import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwf")
export default class LwfController {
  @operation({
    summary: "Get Lwf",
  })
  @get()
  static getLwf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lwf",
  })
  @post("{id}")
  static createLwf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
