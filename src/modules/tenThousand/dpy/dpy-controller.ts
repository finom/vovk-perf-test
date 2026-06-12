import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dpy")
export default class DpyController {
  @operation({
    summary: "Get Dpy",
  })
  @get()
  static getDpy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dpy",
  })
  @post("{id}")
  static createDpy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
