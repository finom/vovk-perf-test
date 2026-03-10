import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cwo")
export default class CwoController {
  @operation({
    summary: "Get Cwo",
  })
  @get()
  static getCwo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cwo",
  })
  @post("{id}")
  static createCwo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
