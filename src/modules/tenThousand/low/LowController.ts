import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("low")
export default class LowController {
  @operation({
    summary: "Get Low",
  })
  @get()
  static getLow = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Low",
  })
  @post("{id}")
  static createLow = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
