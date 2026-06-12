import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mqi")
export default class MqiController {
  @operation({
    summary: "Get Mqi",
  })
  @get()
  static getMqi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mqi",
  })
  @post("{id}")
  static createMqi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
