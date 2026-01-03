import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvns")
export default class DvnController {
  @operation({
    summary: "Get Dvns",
  })
  @get()
  static getDvns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dvn",
  })
  @post("{id}")
  static createDvn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
