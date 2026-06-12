import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("btt")
export default class BttController {
  @operation({
    summary: "Get Btt",
  })
  @get()
  static getBtt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Btt",
  })
  @post("{id}")
  static createBtt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
