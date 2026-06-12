import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lap")
export default class LapController {
  @operation({
    summary: "Get Lap",
  })
  @get()
  static getLap = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lap",
  })
  @post("{id}")
  static createLap = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
