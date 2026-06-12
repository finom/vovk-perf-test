import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bx")
export default class BxController {
  @operation({
    summary: "Get Bx",
  })
  @get()
  static getBx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bx",
  })
  @post("{id}")
  static createBx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
