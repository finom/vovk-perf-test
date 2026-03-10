import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fng")
export default class FngController {
  @operation({
    summary: "Get Fng",
  })
  @get()
  static getFng = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fng",
  })
  @post("{id}")
  static createFng = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
