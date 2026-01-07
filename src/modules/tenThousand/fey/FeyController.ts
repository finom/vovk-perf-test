import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fey")
export default class FeyController {
  @operation({
    summary: "Get Fey",
  })
  @get()
  static getFey = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fey",
  })
  @post("{id}")
  static createFey = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
