import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpfs")
export default class JpfController {
  @operation({
    summary: "Get Jpfs",
  })
  @get()
  static getJpfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jpf",
  })
  @post("{id}")
  static createJpf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
