import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ffh")
export default class FfhController {
  @operation({
    summary: "Get Ffh",
  })
  @get()
  static getFfh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ffh",
  })
  @post("{id}")
  static createFfh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
