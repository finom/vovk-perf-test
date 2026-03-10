import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dbn")
export default class DbnController {
  @operation({
    summary: "Get Dbn",
  })
  @get()
  static getDbn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dbn",
  })
  @post("{id}")
  static createDbn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
