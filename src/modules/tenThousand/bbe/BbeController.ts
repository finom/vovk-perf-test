import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bbe")
export default class BbeController {
  @operation({
    summary: "Get Bbe",
  })
  @get()
  static getBbe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bbe",
  })
  @post("{id}")
  static createBbe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
