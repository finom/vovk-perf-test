import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mvw")
export default class MvwController {
  @operation({
    summary: "Get Mvw",
  })
  @get()
  static getMvw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mvw",
  })
  @post("{id}")
  static createMvw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
