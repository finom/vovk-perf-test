import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqp")
export default class GqpController {
  @operation({
    summary: "Get Gqp",
  })
  @get()
  static getGqp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gqp",
  })
  @post("{id}")
  static createGqp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
