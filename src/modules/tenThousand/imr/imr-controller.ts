import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("imr")
export default class ImrController {
  @operation({
    summary: "Get Imr",
  })
  @get()
  static getImr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Imr",
  })
  @post("{id}")
  static createImr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
