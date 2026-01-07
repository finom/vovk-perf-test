import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgp")
export default class CgpController {
  @operation({
    summary: "Get Cgp",
  })
  @get()
  static getCgp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cgp",
  })
  @post("{id}")
  static createCgp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
