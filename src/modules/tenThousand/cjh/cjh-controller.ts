import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cjh")
export default class CjhController {
  @operation({
    summary: "Get Cjh",
  })
  @get()
  static getCjh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cjh",
  })
  @post("{id}")
  static createCjh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
