import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lpw")
export default class LpwController {
  @operation({
    summary: "Get Lpw",
  })
  @get()
  static getLpw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lpw",
  })
  @post("{id}")
  static createLpw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
