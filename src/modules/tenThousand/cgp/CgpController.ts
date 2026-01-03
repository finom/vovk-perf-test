import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgps")
export default class CgpController {
  @operation({
    summary: "Get Cgps",
  })
  @get()
  static getCgps = procedure({
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
