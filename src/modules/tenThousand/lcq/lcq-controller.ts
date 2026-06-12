import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lcq")
export default class LcqController {
  @operation({
    summary: "Get Lcq",
  })
  @get()
  static getLcq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lcq",
  })
  @post("{id}")
  static createLcq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
