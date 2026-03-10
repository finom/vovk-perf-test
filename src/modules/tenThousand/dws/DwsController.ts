import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dws")
export default class DwsController {
  @operation({
    summary: "Get Dws",
  })
  @get()
  static getDws = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dws",
  })
  @post("{id}")
  static createDws = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
