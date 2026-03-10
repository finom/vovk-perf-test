import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fyk")
export default class FykController {
  @operation({
    summary: "Get Fyk",
  })
  @get()
  static getFyk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fyk",
  })
  @post("{id}")
  static createFyk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
