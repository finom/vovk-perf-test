import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ieb")
export default class IebController {
  @operation({
    summary: "Get Ieb",
  })
  @get()
  static getIeb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ieb",
  })
  @post("{id}")
  static createIeb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
