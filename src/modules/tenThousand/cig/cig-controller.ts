import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cig")
export default class CigController {
  @operation({
    summary: "Get Cig",
  })
  @get()
  static getCig = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cig",
  })
  @post("{id}")
  static createCig = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
