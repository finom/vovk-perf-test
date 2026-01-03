import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kggs")
export default class KggController {
  @operation({
    summary: "Get Kggs",
  })
  @get()
  static getKggs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kgg",
  })
  @post("{id}")
  static createKgg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
