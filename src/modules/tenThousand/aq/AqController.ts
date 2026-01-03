import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqs")
export default class AqController {
  @operation({
    summary: "Get Aqs",
  })
  @get()
  static getAqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aq",
  })
  @post("{id}")
  static createAq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
