import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("llh")
export default class LlhController {
  @operation({
    summary: "Get Llh",
  })
  @get()
  static getLlh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Llh",
  })
  @post("{id}")
  static createLlh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
