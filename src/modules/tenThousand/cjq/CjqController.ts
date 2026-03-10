import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cjq")
export default class CjqController {
  @operation({
    summary: "Get Cjq",
  })
  @get()
  static getCjq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cjq",
  })
  @post("{id}")
  static createCjq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
