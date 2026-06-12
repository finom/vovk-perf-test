import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bsl")
export default class BslController {
  @operation({
    summary: "Get Bsl",
  })
  @get()
  static getBsl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bsl",
  })
  @post("{id}")
  static createBsl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
