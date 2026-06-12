import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mvr")
export default class MvrController {
  @operation({
    summary: "Get Mvr",
  })
  @get()
  static getMvr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mvr",
  })
  @post("{id}")
  static createMvr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
