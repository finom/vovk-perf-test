import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ch")
export default class ChController {
  @operation({
    summary: "Get Ch",
  })
  @get()
  static getCh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ch",
  })
  @post("{id}")
  static createCh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
