import { procedure, prefix, get, post, operation } from "vovk";

@prefix("migs")
export default class MigController {
  @operation({
    summary: "Get Migs",
  })
  @get()
  static getMigs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mig",
  })
  @post("{id}")
  static createMig = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
