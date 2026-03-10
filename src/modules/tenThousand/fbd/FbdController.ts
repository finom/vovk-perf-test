import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fbd")
export default class FbdController {
  @operation({
    summary: "Get Fbd",
  })
  @get()
  static getFbd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fbd",
  })
  @post("{id}")
  static createFbd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
