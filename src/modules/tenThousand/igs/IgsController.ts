import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igs")
export default class IgsController {
  @operation({
    summary: "Get Igs",
  })
  @get()
  static getIgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Igs",
  })
  @post("{id}")
  static createIgs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
