import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhs")
export default class NhController {
  @operation({
    summary: "Get Nhs",
  })
  @get()
  static getNhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nh",
  })
  @post("{id}")
  static createNh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
