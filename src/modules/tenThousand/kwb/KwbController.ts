import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwb")
export default class KwbController {
  @operation({
    summary: "Get Kwb",
  })
  @get()
  static getKwb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kwb",
  })
  @post("{id}")
  static createKwb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
