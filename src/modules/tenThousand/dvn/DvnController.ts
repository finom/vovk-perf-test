import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvn")
export default class DvnController {
  @operation({
    summary: "Get Dvn",
  })
  @get()
  static getDvn = procedure({
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
