import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("guq")
export default class GuqController {
  @operation({
    summary: "Get Guq",
  })
  @get()
  static getGuq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Guq",
  })
  @post("{id}")
  static createGuq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
