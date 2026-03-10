import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("tq")
export default class TqController {
  @operation({
    summary: "Get Tq",
  })
  @get()
  static getTq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Tq",
  })
  @post("{id}")
  static createTq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
