import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzy")
export default class DzyController {
  @operation({
    summary: "Get Dzy",
  })
  @get()
  static getDzy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dzy",
  })
  @post("{id}")
  static createDzy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
