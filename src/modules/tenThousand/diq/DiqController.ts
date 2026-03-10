import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("diq")
export default class DiqController {
  @operation({
    summary: "Get Diq",
  })
  @get()
  static getDiq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Diq",
  })
  @post("{id}")
  static createDiq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
