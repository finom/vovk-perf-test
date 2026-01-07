import { procedure, prefix, get, post, operation } from "vovk";

@prefix("msn")
export default class MsnController {
  @operation({
    summary: "Get Msn",
  })
  @get()
  static getMsn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Msn",
  })
  @post("{id}")
  static createMsn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
