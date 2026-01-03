import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iems")
export default class IemController {
  @operation({
    summary: "Get Iems",
  })
  @get()
  static getIems = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iem",
  })
  @post("{id}")
  static createIem = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
