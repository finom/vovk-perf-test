import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ber")
export default class BerController {
  @operation({
    summary: "Get Ber",
  })
  @get()
  static getBer = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ber",
  })
  @post("{id}")
  static createBer = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
