import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mtf")
export default class MtfController {
  @operation({
    summary: "Get Mtf",
  })
  @get()
  static getMtf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mtf",
  })
  @post("{id}")
  static createMtf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
