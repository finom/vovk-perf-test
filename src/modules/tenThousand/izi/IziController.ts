import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izi")
export default class IziController {
  @operation({
    summary: "Get Izi",
  })
  @get()
  static getIzi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Izi",
  })
  @post("{id}")
  static createIzi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
