import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fer")
export default class FerController {
  @operation({
    summary: "Get Fer",
  })
  @get()
  static getFer = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fer",
  })
  @post("{id}")
  static createFer = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
