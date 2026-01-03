import { procedure, prefix, get, post, operation } from "vovk";

@prefix("itps")
export default class ItpController {
  @operation({
    summary: "Get Itps",
  })
  @get()
  static getItps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Itp",
  })
  @post("{id}")
  static createItp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
