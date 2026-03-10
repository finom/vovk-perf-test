import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("goy")
export default class GoyController {
  @operation({
    summary: "Get Goy",
  })
  @get()
  static getGoy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Goy",
  })
  @post("{id}")
  static createGoy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
