import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqes")
export default class AqeController {
  @operation({
    summary: "Get Aqes",
  })
  @get()
  static getAqes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aqe",
  })
  @post("{id}")
  static createAqe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
