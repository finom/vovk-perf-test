import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npt")
export default class NptController {
  @operation({
    summary: "Get Npt",
  })
  @get()
  static getNpt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Npt",
  })
  @post("{id}")
  static createNpt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
