import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gyz")
export default class GyzController {
  @operation({
    summary: "Get Gyz",
  })
  @get()
  static getGyz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gyz",
  })
  @post("{id}")
  static createGyz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
