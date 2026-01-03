import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ieis")
export default class IeiController {
  @operation({
    summary: "Get Ieis",
  })
  @get()
  static getIeis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iei",
  })
  @post("{id}")
  static createIei = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
