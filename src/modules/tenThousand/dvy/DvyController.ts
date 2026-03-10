import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dvy")
export default class DvyController {
  @operation({
    summary: "Get Dvy",
  })
  @get()
  static getDvy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dvy",
  })
  @post("{id}")
  static createDvy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
