import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dwa")
export default class DwaController {
  @operation({
    summary: "Get Dwa",
  })
  @get()
  static getDwa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dwa",
  })
  @post("{id}")
  static createDwa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
