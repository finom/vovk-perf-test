import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhfs")
export default class JhfController {
  @operation({
    summary: "Get Jhfs",
  })
  @get()
  static getJhfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jhf",
  })
  @post("{id}")
  static createJhf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
