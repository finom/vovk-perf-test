import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdfs")
export default class MdfController {
  @operation({
    summary: "Get Mdfs",
  })
  @get()
  static getMdfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mdf",
  })
  @post("{id}")
  static createMdf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
