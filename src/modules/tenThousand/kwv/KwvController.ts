import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwv")
export default class KwvController {
  @operation({
    summary: "Get Kwv",
  })
  @get()
  static getKwv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kwv",
  })
  @post("{id}")
  static createKwv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
