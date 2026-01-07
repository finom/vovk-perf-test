import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwo")
export default class IwoController {
  @operation({
    summary: "Get Iwo",
  })
  @get()
  static getIwo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iwo",
  })
  @post("{id}")
  static createIwo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
