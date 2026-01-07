import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmj")
export default class DmjController {
  @operation({
    summary: "Get Dmj",
  })
  @get()
  static getDmj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dmj",
  })
  @post("{id}")
  static createDmj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
