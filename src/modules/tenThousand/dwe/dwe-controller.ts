import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dwe")
export default class DweController {
  @operation({
    summary: "Get Dwe",
  })
  @get()
  static getDwe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dwe",
  })
  @post("{id}")
  static createDwe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
