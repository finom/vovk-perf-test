import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agfs")
export default class AgfController {
  @operation({
    summary: "Get Agfs",
  })
  @get()
  static getAgfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Agf",
  })
  @post("{id}")
  static createAgf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
