import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mrh")
export default class MrhController {
  @operation({
    summary: "Get Mrh",
  })
  @get()
  static getMrh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mrh",
  })
  @post("{id}")
  static createMrh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
