import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lis")
export default class LisController {
  @operation({
    summary: "Get Lis",
  })
  @get()
  static getLis = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lis",
  })
  @post("{id}")
  static createLis = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
