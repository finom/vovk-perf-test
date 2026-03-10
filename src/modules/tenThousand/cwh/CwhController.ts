import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cwh")
export default class CwhController {
  @operation({
    summary: "Get Cwh",
  })
  @get()
  static getCwh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cwh",
  })
  @post("{id}")
  static createCwh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
