import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dys")
export default class DysController {
  @operation({
    summary: "Get Dys",
  })
  @get()
  static getDys = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dys",
  })
  @post("{id}")
  static createDys = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
