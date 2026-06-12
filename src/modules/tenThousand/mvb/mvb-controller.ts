import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mvb")
export default class MvbController {
  @operation({
    summary: "Get Mvb",
  })
  @get()
  static getMvb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mvb",
  })
  @post("{id}")
  static createMvb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
