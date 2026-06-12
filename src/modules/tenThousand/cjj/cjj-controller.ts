import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cjj")
export default class CjjController {
  @operation({
    summary: "Get Cjj",
  })
  @get()
  static getCjj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cjj",
  })
  @post("{id}")
  static createCjj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
