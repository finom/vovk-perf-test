import { procedure, prefix, get, post, operation } from "vovk";

@prefix("msfs")
export default class MsfController {
  @operation({
    summary: "Get Msfs",
  })
  @get()
  static getMsfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Msf",
  })
  @post("{id}")
  static createMsf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
