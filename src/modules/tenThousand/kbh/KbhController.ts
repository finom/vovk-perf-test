import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbhs")
export default class KbhController {
  @operation({
    summary: "Get Kbhs",
  })
  @get()
  static getKbhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kbh",
  })
  @post("{id}")
  static createKbh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
