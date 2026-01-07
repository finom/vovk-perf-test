import { procedure, prefix, get, post, operation } from "vovk";

@prefix("heo")
export default class HeoController {
  @operation({
    summary: "Get Heo",
  })
  @get()
  static getHeo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Heo",
  })
  @post("{id}")
  static createHeo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
