import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hod")
export default class HodController {
  @operation({
    summary: "Get Hod",
  })
  @get()
  static getHod = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hod",
  })
  @post("{id}")
  static createHod = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
