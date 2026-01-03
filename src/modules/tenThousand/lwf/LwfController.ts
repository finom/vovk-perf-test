import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwfs")
export default class LwfController {
  @operation({
    summary: "Get Lwfs",
  })
  @get()
  static getLwfs = procedure({
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
