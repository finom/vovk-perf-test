import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iet")
export default class IetController {
  @operation({
    summary: "Get Iet",
  })
  @get()
  static getIet = procedure({
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
