import { procedure, prefix, get, post, operation } from "vovk";

@prefix("myms")
export default class MymController {
  @operation({
    summary: "Get Myms",
  })
  @get()
  static getMyms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mym",
  })
  @post("{id}")
  static createMym = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
