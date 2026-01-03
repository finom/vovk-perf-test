import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iufs")
export default class IufController {
  @operation({
    summary: "Get Iufs",
  })
  @get()
  static getIufs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iuf",
  })
  @post("{id}")
  static createIuf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
