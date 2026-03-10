import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("te")
export default class TeController {
  @operation({
    summary: "Get Te",
  })
  @get()
  static getTe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Te",
  })
  @post("{id}")
  static createTe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
