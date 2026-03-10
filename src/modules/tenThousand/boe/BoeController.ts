import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("boe")
export default class BoeController {
  @operation({
    summary: "Get Boe",
  })
  @get()
  static getBoe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Boe",
  })
  @post("{id}")
  static createBoe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
