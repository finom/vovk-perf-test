import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngies")
export default class NgyController {
  @operation({
    summary: "Get Ngies",
  })
  @get()
  static getNgies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ngy",
  })
  @post("{id}")
  static createNgy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
