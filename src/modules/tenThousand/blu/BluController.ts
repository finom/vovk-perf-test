import { procedure, prefix, get, post, operation } from "vovk";

@prefix("blus")
export default class BluController {
  @operation({
    summary: "Get Blus",
  })
  @get()
  static getBlus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Blu",
  })
  @post("{id}")
  static createBlu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
