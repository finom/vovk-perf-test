import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lf")
export default class LfController {
  @operation({
    summary: "Get Lf",
  })
  @get()
  static getLf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lf",
  })
  @post("{id}")
  static createLf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
