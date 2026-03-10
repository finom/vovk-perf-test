import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lpz")
export default class LpzController {
  @operation({
    summary: "Get Lpz",
  })
  @get()
  static getLpz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lpz",
  })
  @post("{id}")
  static createLpz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
