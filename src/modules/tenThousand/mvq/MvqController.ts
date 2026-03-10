import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mvq")
export default class MvqController {
  @operation({
    summary: "Get Mvq",
  })
  @get()
  static getMvq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mvq",
  })
  @post("{id}")
  static createMvq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
