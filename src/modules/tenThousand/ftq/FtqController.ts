import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ftq")
export default class FtqController {
  @operation({
    summary: "Get Ftq",
  })
  @get()
  static getFtq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ftq",
  })
  @post("{id}")
  static createFtq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
