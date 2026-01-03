import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vus")
export default class VuController {
  @operation({
    summary: "Get Vus",
  })
  @get()
  static getVus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Vu",
  })
  @post("{id}")
  static createVu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
