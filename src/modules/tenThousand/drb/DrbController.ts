import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("drb")
export default class DrbController {
  @operation({
    summary: "Get Drb",
  })
  @get()
  static getDrb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Drb",
  })
  @post("{id}")
  static createDrb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
