import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("awe")
export default class AweController {
  @operation({
    summary: "Get Awe",
  })
  @get()
  static getAwe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Awe",
  })
  @post("{id}")
  static createAwe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
