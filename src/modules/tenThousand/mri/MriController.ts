import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mris")
export default class MriController {
  @operation({
    summary: "Get Mris",
  })
  @get()
  static getMris = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mri",
  })
  @post("{id}")
  static createMri = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
