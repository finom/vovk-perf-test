import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fo")
export default class FoController {
  @operation({
    summary: "Get Fo",
  })
  @get()
  static getFo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fo",
  })
  @post("{id}")
  static createFo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
