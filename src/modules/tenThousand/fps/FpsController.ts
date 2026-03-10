import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fps")
export default class FpsController {
  @operation({
    summary: "Get Fps",
  })
  @get()
  static getFps = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fps",
  })
  @post("{id}")
  static createFps = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
