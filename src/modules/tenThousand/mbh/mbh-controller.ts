import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mbh")
export default class MbhController {
  @operation({
    summary: "Get Mbh",
  })
  @get()
  static getMbh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mbh",
  })
  @post("{id}")
  static createMbh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
