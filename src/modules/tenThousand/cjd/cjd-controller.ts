import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cjd")
export default class CjdController {
  @operation({
    summary: "Get Cjd",
  })
  @get()
  static getCjd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cjd",
  })
  @post("{id}")
  static createCjd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
