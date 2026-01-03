import { procedure, prefix, get, post, operation } from "vovk";

@prefix("niis")
export default class NiiController {
  @operation({
    summary: "Get Niis",
  })
  @get()
  static getNiis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nii",
  })
  @post("{id}")
  static createNii = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
