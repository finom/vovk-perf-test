import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cvm")
export default class CvmController {
  @operation({
    summary: "Get Cvm",
  })
  @get()
  static getCvm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cvm",
  })
  @post("{id}")
  static createCvm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
