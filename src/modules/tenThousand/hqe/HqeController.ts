import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqes")
export default class HqeController {
  @operation({
    summary: "Get Hqes",
  })
  @get()
  static getHqes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hqe",
  })
  @post("{id}")
  static createHqe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
