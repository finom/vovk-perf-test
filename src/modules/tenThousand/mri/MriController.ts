import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mri")
export default class MriController {
  @operation({
    summary: "Get Mri",
  })
  @get()
  static getMri = procedure({
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
