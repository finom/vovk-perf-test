import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mams")
export default class MamController {
  @operation({
    summary: "Get Mams",
  })
  @get()
  static getMams = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mam",
  })
  @post("{id}")
  static createMam = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
