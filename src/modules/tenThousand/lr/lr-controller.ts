import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lr")
export default class LrController {
  @operation({
    summary: "Get Lr",
  })
  @get()
  static getLr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lr",
  })
  @post("{id}")
  static createLr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
