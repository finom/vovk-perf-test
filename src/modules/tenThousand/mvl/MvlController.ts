import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mvl")
export default class MvlController {
  @operation({
    summary: "Get Mvl",
  })
  @get()
  static getMvl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mvl",
  })
  @post("{id}")
  static createMvl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
