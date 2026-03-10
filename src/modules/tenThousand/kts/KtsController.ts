import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kts")
export default class KtsController {
  @operation({
    summary: "Get Kts",
  })
  @get()
  static getKts = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kts",
  })
  @post("{id}")
  static createKts = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
