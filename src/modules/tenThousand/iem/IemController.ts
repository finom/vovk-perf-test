import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iem")
export default class IemController {
  @operation({
    summary: "Get Iem",
  })
  @get()
  static getIem = procedure({
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
