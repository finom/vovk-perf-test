import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nmus")
export default class NmuController {
  @operation({
    summary: "Get Nmus",
  })
  @get()
  static getNmus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nmu",
  })
  @post("{id}")
  static createNmu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
