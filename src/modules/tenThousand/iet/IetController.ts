import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iets")
export default class IetController {
  @operation({
    summary: "Get Iets",
  })
  @get()
  static getIets = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iet",
  })
  @post("{id}")
  static createIet = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
