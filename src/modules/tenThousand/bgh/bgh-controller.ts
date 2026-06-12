import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bgh")
export default class BghController {
  @operation({
    summary: "Get Bgh",
  })
  @get()
  static getBgh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bgh",
  })
  @post("{id}")
  static createBgh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
