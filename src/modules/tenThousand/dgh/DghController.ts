import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dgh")
export default class DghController {
  @operation({
    summary: "Get Dgh",
  })
  @get()
  static getDgh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dgh",
  })
  @post("{id}")
  static createDgh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
