import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("rc")
export default class RcController {
  @operation({
    summary: "Get Rc",
  })
  @get()
  static getRc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Rc",
  })
  @post("{id}")
  static createRc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
