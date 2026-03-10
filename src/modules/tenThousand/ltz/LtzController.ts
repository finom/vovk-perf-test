import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ltz")
export default class LtzController {
  @operation({
    summary: "Get Ltz",
  })
  @get()
  static getLtz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ltz",
  })
  @post("{id}")
  static createLtz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
