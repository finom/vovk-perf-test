import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dej")
export default class DejController {
  @operation({
    summary: "Get Dej",
  })
  @get()
  static getDej = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dej",
  })
  @post("{id}")
  static createDej = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
