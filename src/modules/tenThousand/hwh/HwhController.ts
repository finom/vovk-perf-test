import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwhs")
export default class HwhController {
  @operation({
    summary: "Get Hwhs",
  })
  @get()
  static getHwhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hwh",
  })
  @post("{id}")
  static createHwh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
