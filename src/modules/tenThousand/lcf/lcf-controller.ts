import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lcf")
export default class LcfController {
  @operation({
    summary: "Get Lcf",
  })
  @get()
  static getLcf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lcf",
  })
  @post("{id}")
  static createLcf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
