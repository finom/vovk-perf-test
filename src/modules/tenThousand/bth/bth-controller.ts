import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bth")
export default class BthController {
  @operation({
    summary: "Get Bth",
  })
  @get()
  static getBth = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bth",
  })
  @post("{id}")
  static createBth = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
