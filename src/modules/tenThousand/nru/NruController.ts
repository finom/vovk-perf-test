import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nru")
export default class NruController {
  @operation({
    summary: "Get Nru",
  })
  @get()
  static getNru = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nru",
  })
  @post("{id}")
  static createNru = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
