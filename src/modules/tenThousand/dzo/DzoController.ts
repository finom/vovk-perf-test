import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dzo")
export default class DzoController {
  @operation({
    summary: "Get Dzo",
  })
  @get()
  static getDzo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dzo",
  })
  @post("{id}")
  static createDzo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
