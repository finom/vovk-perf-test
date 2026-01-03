import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjcs")
export default class HjcController {
  @operation({
    summary: "Get Hjcs",
  })
  @get()
  static getHjcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hjc",
  })
  @post("{id}")
  static createHjc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
