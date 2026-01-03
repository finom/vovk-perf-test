import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hys")
export default class HysController {
  @operation({
    summary: "Get Hys",
  })
  @get()
  static getHys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hys",
  })
  @post("{id}")
  static createHys = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
