import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azts")
export default class AztController {
  @operation({
    summary: "Get Azts",
  })
  @get()
  static getAzts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Azt",
  })
  @post("{id}")
  static createAzt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
