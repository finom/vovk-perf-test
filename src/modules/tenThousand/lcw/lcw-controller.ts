import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lcw")
export default class LcwController {
  @operation({
    summary: "Get Lcw",
  })
  @get()
  static getLcw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lcw",
  })
  @post("{id}")
  static createLcw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
