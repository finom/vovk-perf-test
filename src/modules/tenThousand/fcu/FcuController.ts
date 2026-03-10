import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fcu")
export default class FcuController {
  @operation({
    summary: "Get Fcu",
  })
  @get()
  static getFcu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fcu",
  })
  @post("{id}")
  static createFcu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
