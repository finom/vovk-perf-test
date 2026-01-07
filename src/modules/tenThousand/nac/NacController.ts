import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nac")
export default class NacController {
  @operation({
    summary: "Get Nac",
  })
  @get()
  static getNac = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nac",
  })
  @post("{id}")
  static createNac = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
