import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cal")
export default class CalController {
  @operation({
    summary: "Get Cal",
  })
  @get()
  static getCal = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cal",
  })
  @post("{id}")
  static createCal = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
