import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ktz")
export default class KtzController {
  @operation({
    summary: "Get Ktz",
  })
  @get()
  static getKtz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ktz",
  })
  @post("{id}")
  static createKtz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
