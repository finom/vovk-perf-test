import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ros")
export default class RoController {
  @operation({
    summary: "Get Ros",
  })
  @get()
  static getRos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ro",
  })
  @post("{id}")
  static createRo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
