import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ftqs")
export default class FtqController {
  @operation({
    summary: "Get Ftqs",
  })
  @get()
  static getFtqs = procedure({
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
