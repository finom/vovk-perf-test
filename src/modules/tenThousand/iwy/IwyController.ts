import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwies")
export default class IwyController {
  @operation({
    summary: "Get Iwies",
  })
  @get()
  static getIwies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iwy",
  })
  @post("{id}")
  static createIwy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
