import { procedure, prefix, get, post, operation } from "vovk";

@prefix("msr")
export default class MsrController {
  @operation({
    summary: "Get Msr",
  })
  @get()
  static getMsr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Msr",
  })
  @post("{id}")
  static createMsr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
