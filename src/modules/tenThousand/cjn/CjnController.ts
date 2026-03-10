import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cjn")
export default class CjnController {
  @operation({
    summary: "Get Cjn",
  })
  @get()
  static getCjn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cjn",
  })
  @post("{id}")
  static createCjn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
