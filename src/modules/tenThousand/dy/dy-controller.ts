import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dy")
export default class DyController {
  @operation({
    summary: "Get Dy",
  })
  @get()
  static getDy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dy",
  })
  @post("{id}")
  static createDy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
