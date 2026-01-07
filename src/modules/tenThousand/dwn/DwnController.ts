import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwn")
export default class DwnController {
  @operation({
    summary: "Get Dwn",
  })
  @get()
  static getDwn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dwn",
  })
  @post("{id}")
  static createDwn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
