import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hsc")
export default class HscController {
  @operation({
    summary: "Get Hsc",
  })
  @get()
  static getHsc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hsc",
  })
  @post("{id}")
  static createHsc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
