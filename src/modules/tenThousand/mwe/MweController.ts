import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mwe")
export default class MweController {
  @operation({
    summary: "Get Mwe",
  })
  @get()
  static getMwe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mwe",
  })
  @post("{id}")
  static createMwe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
