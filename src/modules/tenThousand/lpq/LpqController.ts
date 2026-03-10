import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lpq")
export default class LpqController {
  @operation({
    summary: "Get Lpq",
  })
  @get()
  static getLpq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lpq",
  })
  @post("{id}")
  static createLpq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
