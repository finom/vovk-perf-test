import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npm")
export default class NpmController {
  @operation({
    summary: "Get Npm",
  })
  @get()
  static getNpm = procedure({
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
