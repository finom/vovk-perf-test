import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hsh")
export default class HshController {
  @operation({
    summary: "Get Hsh",
  })
  @get()
  static getHsh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hsh",
  })
  @post("{id}")
  static createHsh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
