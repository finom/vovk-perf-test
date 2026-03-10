import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mag")
export default class MagController {
  @operation({
    summary: "Get Mag",
  })
  @get()
  static getMag = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mag",
  })
  @post("{id}")
  static createMag = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
