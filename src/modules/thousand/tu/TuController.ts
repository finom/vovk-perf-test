import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("tu")
export default class TuController {
  @operation({
    summary: "Get Tu",
  })
  @get()
  static getTu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Tu",
  })
  @post("{id}")
  static createTu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
