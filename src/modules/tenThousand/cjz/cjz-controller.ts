import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cjz")
export default class CjzController {
  @operation({
    summary: "Get Cjz",
  })
  @get()
  static getCjz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cjz",
  })
  @post("{id}")
  static createCjz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
