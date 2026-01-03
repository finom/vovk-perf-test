import { procedure, prefix, get, post, operation } from "vovk";

@prefix("msns")
export default class MsnController {
  @operation({
    summary: "Get Msns",
  })
  @get()
  static getMsns = procedure({
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
