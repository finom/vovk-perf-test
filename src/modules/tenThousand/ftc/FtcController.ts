import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ftcs")
export default class FtcController {
  @operation({
    summary: "Get Ftcs",
  })
  @get()
  static getFtcs = procedure({
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
