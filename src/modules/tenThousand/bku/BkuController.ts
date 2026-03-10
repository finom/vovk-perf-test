import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bku")
export default class BkuController {
  @operation({
    summary: "Get Bku",
  })
  @get()
  static getBku = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bku",
  })
  @post("{id}")
  static createBku = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
