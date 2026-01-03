import { procedure, prefix, get, post, operation } from "vovk";

@prefix("asgs")
export default class AsgController {
  @operation({
    summary: "Get Asgs",
  })
  @get()
  static getAsgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Asg",
  })
  @post("{id}")
  static createAsg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
