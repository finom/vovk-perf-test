import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ggh")
export default class GghController {
  @operation({
    summary: "Get Ggh",
  })
  @get()
  static getGgh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ggh",
  })
  @post("{id}")
  static createGgh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
