import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lwf")
export default class LwfController {
  @operation({
    summary: "Get Lwf",
  })
  @get()
  static getLwf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lwf",
  })
  @post("{id}")
  static createLwf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
