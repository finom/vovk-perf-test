import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fod")
export default class FodController {
  @operation({
    summary: "Get Fod",
  })
  @get()
  static getFod = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fod",
  })
  @post("{id}")
  static createFod = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
