import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avq")
export default class AvqController {
  @operation({
    summary: "Get Avq",
  })
  @get()
  static getAvq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Avq",
  })
  @post("{id}")
  static createAvq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
