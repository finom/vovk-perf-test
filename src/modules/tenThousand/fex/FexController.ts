import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fex")
export default class FexController {
  @operation({
    summary: "Get Fex",
  })
  @get()
  static getFex = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fex",
  })
  @post("{id}")
  static createFex = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
