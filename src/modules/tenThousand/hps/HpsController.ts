import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hps")
export default class HpsController {
  @operation({
    summary: "Get Hps",
  })
  @get()
  static getHps = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hps",
  })
  @post("{id}")
  static createHps = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
