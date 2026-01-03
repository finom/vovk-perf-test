import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hihs")
export default class HihController {
  @operation({
    summary: "Get Hihs",
  })
  @get()
  static getHihs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hih",
  })
  @post("{id}")
  static createHih = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
