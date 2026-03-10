import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hil")
export default class HilController {
  @operation({
    summary: "Get Hil",
  })
  @get()
  static getHil = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hil",
  })
  @post("{id}")
  static createHil = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
