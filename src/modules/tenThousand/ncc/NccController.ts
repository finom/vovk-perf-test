import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nccs")
export default class NccController {
  @operation({
    summary: "Get Nccs",
  })
  @get()
  static getNccs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ncc",
  })
  @post("{id}")
  static createNcc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
