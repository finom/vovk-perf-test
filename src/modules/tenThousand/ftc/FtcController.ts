import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ftc")
export default class FtcController {
  @operation({
    summary: "Get Ftc",
  })
  @get()
  static getFtc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ftc",
  })
  @post("{id}")
  static createFtc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
