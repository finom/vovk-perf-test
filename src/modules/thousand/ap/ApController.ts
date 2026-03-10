import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ap")
export default class ApController {
  @operation({
    summary: "Get Ap",
  })
  @get()
  static getAp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ap",
  })
  @post("{id}")
  static createAp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
