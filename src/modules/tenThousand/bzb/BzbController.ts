import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzbs")
export default class BzbController {
  @operation({
    summary: "Get Bzbs",
  })
  @get()
  static getBzbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bzb",
  })
  @post("{id}")
  static createBzb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
