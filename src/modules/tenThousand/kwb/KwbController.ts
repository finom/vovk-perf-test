import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwbs")
export default class KwbController {
  @operation({
    summary: "Get Kwbs",
  })
  @get()
  static getKwbs = procedure({
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
