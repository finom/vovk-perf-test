import { procedure, prefix, get, post, operation } from "vovk";

@prefix("amq")
export default class AmqController {
  @operation({
    summary: "Get Amq",
  })
  @get()
  static getAmq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Amq",
  })
  @post("{id}")
  static createAmq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
