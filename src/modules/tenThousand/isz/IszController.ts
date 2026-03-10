import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("isz")
export default class IszController {
  @operation({
    summary: "Get Isz",
  })
  @get()
  static getIsz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Isz",
  })
  @post("{id}")
  static createIsz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
