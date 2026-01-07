import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpe")
export default class KpeController {
  @operation({
    summary: "Get Kpe",
  })
  @get()
  static getKpe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kpe",
  })
  @post("{id}")
  static createKpe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
