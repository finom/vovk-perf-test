import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dr")
export default class DrController {
  @operation({
    summary: "Get Dr",
  })
  @get()
  static getDr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dr",
  })
  @post("{id}")
  static createDr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
