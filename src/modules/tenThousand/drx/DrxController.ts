import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("drx")
export default class DrxController {
  @operation({
    summary: "Get Drx",
  })
  @get()
  static getDrx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Drx",
  })
  @post("{id}")
  static createDrx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
