import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afs")
export default class AfsController {
  @operation({
    summary: "Get Afs",
  })
  @get()
  static getAfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Afs",
  })
  @post("{id}")
  static createAfs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
