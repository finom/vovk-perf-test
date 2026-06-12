import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("grt")
export default class GrtController {
  @operation({
    summary: "Get Grt",
  })
  @get()
  static getGrt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Grt",
  })
  @post("{id}")
  static createGrt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
