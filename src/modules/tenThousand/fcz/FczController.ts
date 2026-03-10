import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fcz")
export default class FczController {
  @operation({
    summary: "Get Fcz",
  })
  @get()
  static getFcz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fcz",
  })
  @post("{id}")
  static createFcz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
