import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avfs")
export default class AvfController {
  @operation({
    summary: "Get Avfs",
  })
  @get()
  static getAvfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Avf",
  })
  @post("{id}")
  static createAvf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
