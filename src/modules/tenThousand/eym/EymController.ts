import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eyms")
export default class EymController {
  @operation({
    summary: "Get Eyms",
  })
  @get()
  static getEyms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eym",
  })
  @post("{id}")
  static createEym = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
