import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mzq")
export default class MzqController {
  @operation({
    summary: "Get Mzq",
  })
  @get()
  static getMzq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mzq",
  })
  @post("{id}")
  static createMzq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
