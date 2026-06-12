import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ben")
export default class BenController {
  @operation({
    summary: "Get Ben",
  })
  @get()
  static getBen = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ben",
  })
  @post("{id}")
  static createBen = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
