import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mtq")
export default class MtqController {
  @operation({
    summary: "Get Mtq",
  })
  @get()
  static getMtq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mtq",
  })
  @post("{id}")
  static createMtq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
