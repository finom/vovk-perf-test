import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vf")
export default class VfController {
  @operation({
    summary: "Get Vf",
  })
  @get()
  static getVf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Vf",
  })
  @post("{id}")
  static createVf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
