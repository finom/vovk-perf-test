import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bkt")
export default class BktController {
  @operation({
    summary: "Get Bkt",
  })
  @get()
  static getBkt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bkt",
  })
  @post("{id}")
  static createBkt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
