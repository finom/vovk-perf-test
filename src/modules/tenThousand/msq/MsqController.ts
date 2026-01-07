import { procedure, prefix, get, post, operation } from "vovk";

@prefix("msq")
export default class MsqController {
  @operation({
    summary: "Get Msq",
  })
  @get()
  static getMsq = procedure({
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
