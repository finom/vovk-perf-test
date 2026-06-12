import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("may")
export default class MayController {
  @operation({
    summary: "Get May",
  })
  @get()
  static getMay = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create May",
  })
  @post("{id}")
  static createMay = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
