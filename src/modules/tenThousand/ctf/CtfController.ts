import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ctfs")
export default class CtfController {
  @operation({
    summary: "Get Ctfs",
  })
  @get()
  static getCtfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ctf",
  })
  @post("{id}")
  static createCtf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
