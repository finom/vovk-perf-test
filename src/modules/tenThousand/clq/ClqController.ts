import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("clq")
export default class ClqController {
  @operation({
    summary: "Get Clq",
  })
  @get()
  static getClq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Clq",
  })
  @post("{id}")
  static createClq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
