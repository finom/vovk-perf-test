import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fcb")
export default class FcbController {
  @operation({
    summary: "Get Fcb",
  })
  @get()
  static getFcb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fcb",
  })
  @post("{id}")
  static createFcb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
