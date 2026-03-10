import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hym")
export default class HymController {
  @operation({
    summary: "Get Hym",
  })
  @get()
  static getHym = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hym",
  })
  @post("{id}")
  static createHym = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
