import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npms")
export default class NpmController {
  @operation({
    summary: "Get Npms",
  })
  @get()
  static getNpms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Npm",
  })
  @post("{id}")
  static createNpm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
