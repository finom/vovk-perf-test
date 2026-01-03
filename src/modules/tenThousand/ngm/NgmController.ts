import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngms")
export default class NgmController {
  @operation({
    summary: "Get Ngms",
  })
  @get()
  static getNgms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ngm",
  })
  @post("{id}")
  static createNgm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
