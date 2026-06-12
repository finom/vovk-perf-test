import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nms")
export default class NmsController {
  @operation({
    summary: "Get Nms",
  })
  @get()
  static getNms = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nms",
  })
  @post("{id}")
  static createNms = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
