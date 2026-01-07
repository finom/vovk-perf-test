import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ctf")
export default class CtfController {
  @operation({
    summary: "Get Ctf",
  })
  @get()
  static getCtf = procedure({
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
