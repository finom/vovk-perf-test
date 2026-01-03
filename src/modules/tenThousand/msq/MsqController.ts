import { procedure, prefix, get, post, operation } from "vovk";

@prefix("msqs")
export default class MsqController {
  @operation({
    summary: "Get Msqs",
  })
  @get()
  static getMsqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Msq",
  })
  @post("{id}")
  static createMsq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
