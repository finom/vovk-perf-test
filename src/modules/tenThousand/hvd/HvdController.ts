import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvd")
export default class HvdController {
  @operation({
    summary: "Get Hvd",
  })
  @get()
  static getHvd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hvd",
  })
  @post("{id}")
  static createHvd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
