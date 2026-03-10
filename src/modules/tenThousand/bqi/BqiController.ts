import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bqi")
export default class BqiController {
  @operation({
    summary: "Get Bqi",
  })
  @get()
  static getBqi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bqi",
  })
  @post("{id}")
  static createBqi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
