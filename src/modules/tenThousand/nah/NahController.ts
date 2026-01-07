import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nah")
export default class NahController {
  @operation({
    summary: "Get Nah",
  })
  @get()
  static getNah = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nah",
  })
  @post("{id}")
  static createNah = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
