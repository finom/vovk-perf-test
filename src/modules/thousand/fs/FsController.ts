import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fs")
export default class FsController {
  @operation({
    summary: "Get Fs",
  })
  @get()
  static getFs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fs",
  })
  @post("{id}")
  static createFs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
